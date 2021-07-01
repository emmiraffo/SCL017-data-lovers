function filtrarPorRoles(tag, list) {
    return list.filter(elementoArray => elementoArray.tags.includes(tag));
}

function filtrarPorPoder(partype, list) {
    return list.filter(elementoArray => elementoArray.partype == partype);
}

function filtrarPorDifficultad(difficulty, list) {
    return list.filter(elementoArray => elementoArray.info.difficulty == difficulty);
}

function barraBuscadora (searched ,list) {
    return list.filter(elementoArray => elementoArray.name.toLowerCase().includes(searched))
}

export {filtrarPorRoles, filtrarPorPoder, filtrarPorDifficultad, barraBuscadora};