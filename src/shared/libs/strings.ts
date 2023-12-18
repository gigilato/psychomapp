export const slugify = (str: string) => {
  const accentsMap: Record<string, string> = {
    a: 'á|à|ã|â|ä|À|Á|Ã|Â|Ä',
    e: 'é|è|ê|ë|É|È|Ê|Ë',
    i: 'í|ì|î|ï|Í|Ì|Î|Ï',
    o: 'ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    c: 'ç|Ç',
    n: 'ñ|Ñ',
  }

  for (const char in accentsMap) {
    if (accentsMap.hasOwnProperty(char)) {
      const regex = new RegExp(accentsMap[char], 'g')
      str = str.replace(regex, char)
    }
  }

  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}
