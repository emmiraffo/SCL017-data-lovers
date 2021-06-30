
function filtrarPorRoles(tag, list) {
    return list.filter(elementoArray => elementoArray.tags.includes(tag));
}









function filtrarPorDifficultad(difficulty, list) {
    return list.filter(elementoArray => elementoArray.info.difficulty == difficulty);
}


export { filtrarPorRoles, filtrarPorDifficultad }