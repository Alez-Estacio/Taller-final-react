import Listarpersonajes from "./listapersonajes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const students = [
    {
      "id" : 1,
      "name":" Nombre: Yasuo",
      
      "genero": " Genero: M",
      "Tipo": " Tipo: assasin",
      "Describe":" Descripcion: Yasuo es un espadachín ágil que empuña el aire mismo contra sus enemigos. Cuando era un joven orgulloso, fue acusado falsamente de asesinar a su maestro; sin poder probar su inocencia, se vio obligado a matar a su propio hermano en defensa propia. Con el tiempo, se reveló al verdadero asesino de su maestro, y su hermano regresó misteriosamente de la muerte, pero Yasuo aún no podía perdonarse a sí mismo por todo lo que había hecho. Ahora, vaga por el mundo con solo el viento para guiar su espada.",
      "img":"https://i.imgur.com/Eq6IY96.png"
  },
  {
    "name":" Nombre: Riven",
    "img":"https://i.ytimg.com/vi/zb25Nq4-ECs/maxresdefault.jpg",
    
    "genero":" Genero: F",
    "Tipo":" Tipo: Luchador",
    "Describe":" Descripcion: Hace tiempo, fue una guerrera en las huestes de Noxus, pero hoy, Riven está exiliada en una tierra que alguna vez intentó conquistar. Alcanzó un alto rango gracias a la fuerza de su convicción y a su brutal eficiencia, por lo que fue recompensada con una Espada Rúnica Espada Rúnica legendaria y con un batallón propio. Sin embargo, en el frente jonio, la fe de Riven en su tierra natal fue puesta a prueba y, finalmente, se quebró. Tras haber cortado todas sus ataduras al imperio, ahora busca encontrar su lugar en un mundo fragmentado, incluso ante los rumores sobre la restauración de Noxus..."
  
  
  },
  {
    "name":" Nombre: Garen",
    "img":"https://lolskinshop.com/wp-content/uploads/2019/10/garen-god-king.jpg",
    
    "genero":" Genero: M",
    "Tipo":" Tipo: Luchador",
    "Describe":" Descripcion: Garen, un orgulloso y noble guerrero, lucha a la cabeza de la Vanguardia Valerosa. Es popular entre sus compañeros y tiene el respeto de sus enemigos; no podría esperarse menos de un descendiente de la prestigiosa familia Guardia de la Corona, encargada de defender a Demacia y a sus ideales. Enfundado en una armadura resistente a la magia y portando un poderoso mandoble, Garen está listo para pelear contra magos y hechiceros en el campo de batalla, en un verdadero torbellino de acero justo."
  
  },
  {
    "name":" Nombre: Darius",
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM4JpvWvkfDMjgFf9hpp7AyQVtmyYhWSG668_Xox5AlOdySo-qoMwSV6y2iIqLv2ABl8&usqp=CAU",
    
    "genero":" Genero: M",
    "Tipo":" Tipo: Luchador",
    "Describe":" Descripcion: No hay símbolo más grande del poder noxiano que Darius, el líder más temido y endurecido por las batallas. Desde sus orígenes humildes hasta convertirse en la Mano de Noxus, Darius se encarga de los enemigos del imperio, aunque muchos de ellos sean noxianos. Sabiendo que él nunca dudará que su causa es justa y sin titubear una vez que su hacha se levanta, aquellos que están en contra del comandante de la Legión Trifariana no pueden esperar piedad."
  
  },
  {
    "name":" Nombre: Teemo",
    "img":"https://pm1.narvii.com/7734/4fa6dc77c947e32ae8e9cc69e7d1c9baa9aa82aar1-720-417v2_hq.jpg",
    
    "genero":"M",
    "Tipo":" Tipo: A distancia ",
    "Describe":" Descripcion: Teemo es una leyenda entre sus hermanos yordle de la Ciudad de Bandle. Por lo que respecta a los yordles, parece que Teemo tiene un pequeño problema. Aunque disfruta de la compañía de otros yordles, también insiste con frecuencia en realizar misiones en solitario para la defensa de la Ciudad de Bandle. Pese a su personalidad cálida y amable, algo cambia en la mente de Teemo durante el combate, dado que las vidas con las que acaba mientras está de patrulla no le importan en absoluto. Incluso cuando era un joven recluta, los instructores y demás entrenadores encontraban desconcertante el hecho de que, aunque Teemo era por lo general encantador y amable, se convertía en una máquina de matar muy eficaz en cuanto comenzaban los ejercicios de combate. Los superiores de Teemo lo enviaron enseguida a los Exploradores de Mothership, una de las fuerzas especiales más distinguidas de la Ciudad de Bandle, junto con los Comandos Megling."
  
  },
  {
    "name":" Nombre: Tryndamere",
    "img":"https://codigoesports.com/wp-content/uploads/2021/03/tryndamere-luna-sangrienta.jpg",
   
    "genero":" Genero: M",
    "Tipo":" Tipo: Luchador",
    "Describe":"Impulsado por la ira, Tryndamere alguna vez emprendió su camino por Fréljord y desafió abiertamente a los más grandes guerreros del norte preparándose para los días más oscuros que se avecinaban. Por mucho tiempo, el iracundo bárbaro ha buscado la venganza por la aniquilación de su clan, aunque más recientemente encontró la compañía de Ashe Ashe, la líder de Avarosa, así como un hogar con su gente. Su fuerza casi inhumana y su resistencia son legendarias, atributos que le han otorgado incontables victorias a él y sus aliados incluso en situaciones desfavorables."
  
  },
  {
    
    "name":" Nombre: Morgana",
    "img":"https://www.esportmaniacos.com/wp-content/uploads/2021/01/portada-orbe-velocidad-league-of-legends-780x470.jpg",
    
    "genero":" Genero: F",
    "Tipo":" Tipo: Mago",
    "Describe":" Descripcion: Atribulada entre su naturaleza celestial y mortal, Morgana ató sus alas para aceptar su humanidad e inflige su dolor y amargura en los deshonestos y los corruptos. Rechaza las leyes y tradiciones que considera injustas y pelea por la verdad desde las sombras de Demacia con escudos escudos y cadenas cadenas de fuego oscuro, aun cuando otros tratan de reprimirla. Pero, ante todo, Morgana cree que incluso los parias y los desterrados serán capaces de elevarse de nuevo un día."
  
  
  },
  {
    "name":" Nombre: Ryze",
    "img":"https://as.com/esports/imagenes/2017/03/31/league_of_legends/1490974246_507744_1490975252_noticia_normal.jpg",
    
    "genero":" Genero: M",
    "Tipo":" Tipo: Mago",
    "Describe":"Descripcion: Ryze, considerado por muchos como uno de los hechiceros más expertos en Runaterra, es un antiguo y endurecido archimago con una responsabilidad casi imposible de llevar. Armado con una constitución sin igual y una gran gama de conocimiento místico, se pasa la vida buscando Runas del Mundo, fragmentos de magia pura que alguna vez moldearon el mundo a partir de la nada. Debe recuperar esos glifos antes de que caigan en las manos equivocadas porque, aunque alguna vez se usaron para construir a Runaterra, también se pueden utilizar para destruirla."
  
  
  },
  {
    "name":" Nombre:  Veigar",
    "img":"https://www.mobachampion.com/imgs/champion/highres/veigar.jpg",
    
    "genero":" Genero: M",
    "Tipo":" Tipo: Mago",
    "Describe":"Veigar, entusiasta maestro de la magia oscura, se adaptó a poderes que pocos mortales se atreven a explorar. Como un habitante de espíritu libre de Ciudad de Bandle, deseaba rebasar las limitaciones de la magia yordle. Así fue como llegó a unos textos arcanos que habían permanecido ocultos por miles de años. Ahora Veigar es una criatura necia con una interminable fascinación por los misterios del universo y a menudo es subestimado por otros. Aunque él cree que verdaderamente es malvado, posee una moralidad interna que hace dudar a los demás sobre sus motivaciones reales."
  
  },
  {
    "name":" Nombre:  Ashe",
    "img":"https://i.pinimg.com/originals/00/d2/6a/00d26a4ac448d3acbccf7e8fe56b31f3.jpg",
    
    "genero":" Genero: F",
    "Tipo":" Tipo: A distancia ",
    "Describe":"Como Hija del Hielo y madre de guerra de la tribu Avarosa Avarosa, Ashe comanda la más grande horda en el norte. Estoica, inteligente e idealista, pero incómoda con su rol de líder, ella aprovecha las magias ancestrales de su linaje para portar un arco de Hielo Puro. Apoyada por la creencia de su gente que ella es el héroe mitológico reencarnado de Avarosa, Ashe espera unificar el Fréljord una vez más al retomar sus tierras antiguas y tribales."
  
    
  },
  {
    "name":" Nombre:  Twitch",
    "img":"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_8.jpg",
    
    "genero":" Genero: M",
    "Tipo":" Tipo: A distancia ",
    "Describe":"Una rata de la peste zaunita de nacimiento, pero conocedora de la inmundicia por pasión,Zaun Crest icon.png Contracción nerviosa Twitch no tiene miedo de ensuciarse las patas. Apuntando con una ballesta impulsada por químicos al corazón dorado de Piltover , ha prometido mostrar a los de la ciudad de arriba lo sucios que son en realidad. Siempre es un furtivo, cuando no está hurgando en el Sumidero, está cavando profundamente en la basura de otras personas en busca de tesoros descartados ... y tal vez un sándwich mohoso. Piltóver Crest icon.png "
  
  
  },
  {
    "name":" Nombre:  jinx",
    "img":"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_1.jpg",
    
    "genero":" Genero: F",
    "Tipo":" Tipo: A distancia ",
    "Describe":"Jinx, una maniática e impulsiva criminal de Zaun, vive para sembrar el caos sin pararse a pensar en las consecuencias, Con un arsenal de juguetes letales a su disposición, desata las explosiones más brillantes y los estallidos más ruidosos para dejar un rastro de caos y pánico a su paso. Jinx detesta el aburrimiento y con una gran alegría deja su marca de pandemonio a dondequiera que vaya."
  
  
  },
  {
    "name":" Nombre:  Miss fortune",
    "img":"https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4726f6d9b0b9a06c/5f7f7a5350868d0ef21209d2/missfortune_skin01.jpg",
    
    "genero":" Genero: F",
    "Tipo":" Tipo: A distancia ",
    "Describe":"Sarah Fortune, capitana de Aguasturbias famosa por su apariencia, pero temida por su brutalidad, es una figura severa entre los criminales más duros de la ciudad portuaria. Cuando era niña fue testigo de cómo el rey Gangplank Gangplank asesinó a su familia, un acto que vengó brutalmente años después, explotando su barco mientras él estaba abordo. Aquellos que la subestiman tendrán que enfrentar a un oponente seductor e impredecible... y probablemente una bala o dos en sus entrañas."
  
  
  
  }
  ]
  
  const Personajes = () => (
    <>
    
        <ul class="nav nav-pills">
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Personajes"><strong>Inicio</strong></a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Formulario"><strong>Formulario</strong></a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Footer"><strong>Footer</strong></a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Historia"><strong>Historia</strong></a>
  </li>
  
  
</ul>
    {
        students.map( c => <Listarpersonajes name={c.name}   tipo={c.Tipo} describe ={c.Describe} img={c.img} /> )
        
       
      }
    <footer>
      
    
      <figure class="text-center">
     <blockquote class="blockquote">
       <p>Hecho por sebastian mendez </p>
      <p></p>
        <a href ="https://www.facebook.com/sed.mendezmontealegre.5/">  Facebook  <i class="fab fa-facebook"></i> </a><br></br>
        <a href="https://github.com/sebas1000383"> github   <i class="fab fa-github"></i> </a><br></br>
        <a href="https://www.linkedin.com/in/sebastian-mendez-montealegre-3a448a20b/"> Linkedin   <i class="fab fa-linkedin"></i> </a>
        
        
      
     </blockquote>
     <figcaption class="blockquote-footer">
        <cite title="Source Title">Adsi:2184573</cite>
     </figcaption>
   </figure>
   </footer>
    
      
  
     
      
     
    </>
   
    
  )
  
  export default Personajes;