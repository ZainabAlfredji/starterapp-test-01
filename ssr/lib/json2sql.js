
export const json2sql = data => JSON.stringify(data || {}).replace(/'/g, '\'\'')
