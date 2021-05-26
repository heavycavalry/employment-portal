const Pagination = ({ postPerPage, totalPosts }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a href="#" />
          {number}
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
