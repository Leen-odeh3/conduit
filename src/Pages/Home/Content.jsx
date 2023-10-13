import "./Content.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Content = () => {
  const data = [
    {
        img: 'https://i.postimg.cc/htdCdnMv/women.jpg',
      name: "Anah Benešová",
      date: "Fri Dec 09 2022",
      note: "76 ",
      title:
        "Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!",
      description:
        "Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.",
      link: "Read more ..",
      topic: "voluptate, rerum ,ducimus, hic,..",
    },
    {
        img:"https://i.postimg.cc/htdCdnMv/women.jpg",
      name: "Anah Benešová",
      date: "Fri Dec 09 2022",
      note: "1076 ",
      title:
        "If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!",
      description:
        "Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis possimus. Tenetur similique nemo illo soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta vel est omnis.",
      link: "Read more .. ",
      topic: "blanditiis, orm , ducimus , hic,..",
    },
    {
        img:"https://i.postimg.cc/htdCdnMv/women.jpg",
      name: "Anah Benešová",
      date: "Fri Dec 09 2022",
      note: "489 ",
      title: "We need to calculate the bluetooth JBOD bus!",
      description:
        " Ipsa nemo eos sequi nulla id accusamus nam ratione dolore. Omnis sint quisquam accusamus rem rem nihil. Non minus animi cum dolorem earum odit sequi. Rem non inventore sed dicta atque modi. Sed dolorem iste molestiae. Sed eum iste aliquid aliquid.",
      link: "Read more ..",
      topic: "possi, musmaiores , facilis,..",
    },
  ];

  return (
    <div className="all-section">
      {data.map((e, index) => (
        <div key={index}>
            <div style={{display:"flex" , gap:"10px",alignItems:"center",marginBottom:"10px"}}> 
       <img src={e.img} alt="Image" style={{width:"40px",height:"40px",borderRadius:"50%"}} /> 
       <h3> {e.name}</h3>
       </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems:"center"
            }}
          >
            <span>{e.date} </span>
           
            <div className="likes">
              <FavoriteIcon className="icon" />
              {e.note}
            </div>
          </div>
          
          <h2> {e.title}</h2>
          <p className="des"> {e.description} </p>
          <div className="more">
            <a href="#">{e.link} </a>
            <p>{e.topic}</p>
          </div>
          <hr
            style={{
              marginTop: "20px",
              marginBottom: "15px",
              color: "rgb(190, 190, 190)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Content;
