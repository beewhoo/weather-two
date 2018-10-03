import React, { Component } from 'react';


// ES Modules syntax


class Form extends Component {



  constructor(props){
    super(props)
    this.state = {
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      day5:'',
      background: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  handleChange(event) {
    this.setState({city: event.target.value});
    
  }

  handleSubmit(event) {

    //api call happens here

    let base = this



       fetch('https://api.unsplash.com/search/photos/?page=1&per_page=1&query=' + this.state.city +  '&client_id=f51fe03c0dc250913e99d4ad4fd0d084874cc60649e52e653842f84231217146')
         .then(function(response) {
           return response.json()
         }).then(function(json) {


           // update state
           base.setState({
             background: json.results[0].urls.full



            })
         }).catch(function(ex) {
           console.log('Parsing JSON failed', ex)
           alert('Background Image not found')
         })




   fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&cnt=5&units=metric&appid=052f26926ae9784c2d677ca7bc5dec98')
     .then(function(response) {
       return response.json()
     }).then(function(json) {



       // update state
       base.setState({
         day1:json.list[0],
         day2:json.list[1],
         day3:json.list[2],
         day4:json.list[3],
         day5:json.list[4],


        })
     }).catch(function(ex) {
       console.log('Parsing JSON failed', ex)
       alert('City not found - Search again!')
     })

   event.preventDefault()


  }




  render() {
    return (

      <form onSubmit={this.handleSubmit}>



        <label>
          <input type="text" placeholder="search by city" onChange={this.handleChange} />
        </label>

        <p><input className='button' type="submit" value="Search" /></p>

          <div className='forecast'>




          </div>



      </form>
    );
  }
}


export default Form;
