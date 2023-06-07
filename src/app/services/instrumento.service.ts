import { Injectable } from '@angular/core';
import { URL_BASE } from 'src/constants';
import { Instrumento } from 'src/types/Instrumento';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  constructor() { }

  /**
   * Obtener una lista de Instrumentos en formato JSON
   * 
   * @returns una promesa que se resuelve con una lista de Instrumentos
   */
  async findInstrumentos() {
    try {
        const response = await fetch(`${URL_BASE}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json() as Instrumento[];
        for (const item of data) {
            const newImageUrl = await this.findImageInstrumento(item.imagen);
            item.imagenUrl = newImageUrl ? newImageUrl : "";
        }

        return data;
    } catch (error) {
        console.log(error);
        return [];
    } 
  }

  /**
  * Obtener un Instrumento a través de su ID en formato JSON
  * 
  * @param id - ID del Instrumento a obtener
  * @returns una promesa que se resuelve con un Instrumento
  */
  async findInstrumentoById(id: number) {
    try {
        const response = await fetch(`${URL_BASE}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json() as Instrumento;
        const newImageUrl = await this.findImageInstrumento(data.imagen);
        data.imagenUrl = newImageUrl ? newImageUrl : "";
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
  }

  /**
  * Obtener la URL de la imagen de un Instrumento a través de su nombre
  * 
  * @param name - Nombre de la imagen
  * @returns una promesa que se resuelve con la URL de la imagen
  */
  async findImageInstrumento(imageName: string) {
    if (!imageName) {
        return null;
    } 

    try {
        const response = await fetch(`${URL_BASE}/images/${imageName}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.blob();
        const imageUrl = URL.createObjectURL(data);

        return imageUrl;
    } catch (error) {
        console.log(error);
        return null;
    }
  }

  /**
  * Guardar un Instrumento
  * 
  * @param instrumento - Instrumento a guardar
  * @returns una promesa que se resuelve con el Instrumento guardado
  */
  async saveInstrumento(instrumento: Instrumento) {
    try {
        const response = await fetch(`${URL_BASE}`, {
            method: "POST",
            body: JSON.stringify(instrumento),
            headers: {
                "Content-Type": 'application/json'
            }
        });
        
        if (response.status === 201) {
            const data = await response.json() as Instrumento;
            return data;
        } else {
            console.log(`HTTP error! status: ${response.status}`);
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
  }

  /**
  * Guardar una imagen de un Instrumento
  * 
  * @param file - Archivo de imagen a guardar
  * @param name - Nombre de la imagen a guardar
  * @returns una promesa que se resuelve con la Imagen guardada
  */
  async saveImageInstrumento(file: File, name: string) {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch(`${URL_BASE}/save-image/${name}`, {
            method: "POST",
            body: formData,
            headers: {
                "enctype": "multipart/form-data"
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
  }

  /**
  * Actualizar un Instrumento
  * 
  * @param id - ID del Instrumento a actualizar 
  * @param instrumento - Objeto del Instrumento actualizado
  * @returns una promesa que se resuelve con el  Instrumento actualizado
  */
  async updateInstrumento(id: number, instrumento: Instrumento) {
    try {
        const response = await fetch(`${URL_BASE}/${id}`, {
            method: "PUT",
            body: JSON.stringify(instrumento),
            headers: {
                "Content-Type": 'application/json'
            }
        });

        if (response.status === 201) {
            const data = await response.json() as Instrumento;
            return data;
        } else {
            console.log(`HTTP error! status: ${response.status}`);
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
  }

  /**
  * Eliminar un Instrumento por su ID
  * 
  * @param id - ID del instrumento a eliminar
  */
  async deleteInstrumento(id: number) {
    try {
        const response = await fetch(`${URL_BASE}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

    } catch (error) {
        console.log(error);
    }
  }
}
