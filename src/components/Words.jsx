function Word(props) {
  const searchList = document.querySelector(".listData");
  searchList && searchList.insertAdjacentHTML("afterbegin",
    `<li>
        <h4>${props.data.title}</h4>
        ${props.data.snippet}
    </li>`);
  return (

    <div className="listData">

    </div>
  )
}
export default Word;