class Roommate extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:"open"})
        let roommate=document.createElement('div')
        roommate.className='item'
        this.shadow.append(roommate)
        let style=document.createElement('style')
        style.innerText=`
          .item {
            margin-bottom: 30px;
            padding: 30px;
            width: 200px;
            border-radius: 45px;
            border: 5px solid #000;
            text-align: center;
            cursor: pointer;
          }
          .text {
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .text img {
            width: 35px;
            height: auto;
          }
          .text p {
            font-size: 25px;
          }
          h3 {
            text-align: left;
            font-size: 35px;
            margin-bottom: 20px;
          }
          span {
            font-size: 20px;
          }
          `
        this.shadow.append(style)
    }
    set data(data){
        let roommate=this.shadow.querySelector('div')
        roommate.innerHTML=`
            <h3>People 3</h3>
            <div class="text">
                <img src="./images/icon-1.png" alt="">
                <p>Birthday</p>
            </div>
            <span>${data.birthday}</span>
        `
    }
}
customElements.define('room-mate',Roommate)
