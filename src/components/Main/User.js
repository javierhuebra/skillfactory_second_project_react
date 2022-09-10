import '../../stylesheets/Main/User.css'
const User = ({name, username, phone, id, city, website}) =>{
    return(
        <div className="container-user">
            <div className="cell id-cell">{id}</div>
            <div className="cell">{name}</div>
            <div className="cell">{username}</div>
            <div className="cell">{phone}</div>
            <div className="cell">{city}</div>
            <div className="cell">{website}</div>
        </div>
      ) 
}
export default User;
