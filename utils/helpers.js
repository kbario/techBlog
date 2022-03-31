const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

function createDate(date) {
  const d = new Date(date);
  date =
    d.getDate() +
    '/' +
    (d.getMonth() + 1) +
    '/' +
    d.getFullYear().toString()[d.getFullYear().toString().length - 2] +
    d.getFullYear().toString()[d.getFullYear().toString().length - 1];
  return date;
}

function formatData(pagesData) {
  pagesData.map((page) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    page.createdAt = createDate(page.createdAt);
    page.updatedAt = createDate(page.updatedAt);
    return page;
  });
  return pagesData;
}

module.exports = {
  withAuth,
  formatData,
};
