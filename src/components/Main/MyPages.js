import '../../stylesheets/Main/MyPages.css';
const MyPages = () => {
    return(
        <div className="pages-container">
            <p>Other pages made by me:</p>
            <a href='https://javierhuebra.github.io/skill_factory_first_project_js/' target={'_blank'}><button className="javi-page">Previous project js</button></a> 
            <a href='https://losmonosdicen.netlify.app/' target={'_blank'}><button className="javi-page">Geolocation</button></a> 
            <a href='https://javierhuebra.github.io/arcana_page/' target={'_blank'}><button className="javi-page">Arcana</button></a> 
            <a href='https://javierhuebra.github.io/wheather_api_geolocation/' target={'_blank'}><button className="javi-page">Wheather API</button></a> 
            <a href='https://kscaritas.com/' target={'_blank'}><button className="javi-page">K'scaritas.com</button></a> 
        </div>
    )
}

export default MyPages;