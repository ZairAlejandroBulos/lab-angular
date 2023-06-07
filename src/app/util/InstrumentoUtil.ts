export function generateImageName(): string {
    const currentDateTime = new Date().toISOString().replace(/[-T:.]/g, ''); 
    return `${currentDateTime}.jpg`;
}