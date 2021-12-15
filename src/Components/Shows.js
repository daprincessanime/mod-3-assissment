import {Components} from 'react';



class Shows extends Components{
    constructor(){
      super();
      this.state = {
        display: true,
        data: [],
        firstResult: {}
      }
    }
  handleFetch=()=>{
      fetch("https://pursuit-tv-show.herokuapp.com/api/shows")
        .then(res=>res.json())
        .then(allData=>{
            let filtered = allData.filter((show)=>{
                return show.type === "TV Show" || show.type === "";
            })
            console.log(filtered)
            this.setstate({
                data: filtered,
                firstResult: filtered[0],
            })
        })
  }
  handleShowHide=(e)=>{
      this.setstate({
      display: e.target.checked
    })
  }
  componentDidMount(){
      this.handleFetch();
  }
  render(){
      let showElArr = this.state.data.map((show)=>{
          return <div>{show.title}</div>
      })

    return(
        <div>
            <h1>Shows Page</h1>
            <h3>First Result</h3>
            <div>{this.state.firstResult.title}</div> 
            <h3>Shows</h3>
                { showElArr}
            {/* Show/Hide
            <input 
                type='checkbox' 
                onChange={this.handleShowHide} 
                checked={this.state.display}
            />
            
                {this.state.display &&
                    <div>Thing is shown</div>
                }
                { this.state.display &&
                    <div>Thing to hidden</div>
                }

 */}

        </div>
    )
   }
  }
  
  export default Shows;