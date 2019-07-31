export const sanitizeString = (str: string): string => {
  if (!str) {
    return ""
  }

  return str.toLowerCase().trim()
}
