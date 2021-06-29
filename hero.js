
function filtrarPorRoles(tag, list) {
    return list.filter(elementoArray => elementoArray.tags.includes(tag));
}

export { filtrarPorRoles }