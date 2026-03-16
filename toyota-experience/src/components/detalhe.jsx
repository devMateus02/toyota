import img1 from '../assets/interior_01.png'
import img2 from '../assets/interior_02.png'
import img3 from '../assets/interior_03.png'
import img4 from '../assets/interior_04.png'


function Detalhe (){
    return(
        <section class="detalhes-section">
  <h2 class="titulo">Cada detalhe pensado para envolver.</h2>

  <div class="grid-detalhes">
  <div className='detahe_card'>
      <div class="card-1">
      <img src={img1} alt=""/>
    </div>
    <div class=" card-2">
      <img src={img2} alt=""/>
    </div>
  </div>
   <div className='detahe_card'>
     <div class=" card-3">
      <img src={img3} alt=""/>
    </div>
    <div class="card-4">
      <img src={img4} alt=""/>
    </div>
   </div>
  </div>

  
 
</section>
    )
}

export default Detalhe