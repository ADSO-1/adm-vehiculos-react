
const generarId = () => {
    const random = Math.random().toString(36).substr(16);
    const fecha = Date.now().toString(36);
    
    return random + fecha;
}

export default generarId