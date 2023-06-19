export function generatePagination(currentPage, totalPages) {
  if (totalPages > 1) {
    let offset = 4;
    let from = currentPage - offset;
    if (from < 1) {
      from = 2;
    }
    let to = from + offset * 2;
    if (to >= totalPages) {
      let diff = to - totalPages;
      to = totalPages;
      from = from - diff;
      if (from < 1) {
        from = 2;
      }
    }
    let pagesArray = [1];
    for (let page = from; page < to; page++) {
      pagesArray.push(page);
    }
    pagesArray.push(totalPages);
    return pagesArray;
  }
  return [];
}
