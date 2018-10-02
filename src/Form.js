import React, { Component } from 'react';





class Form extends Component {



  constructor(props){
    super(props)
    this.state = {
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      day5:''
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




   fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&cnt=5&units=metric&appid=052f26926ae9784c2d677ca7bc5dec98')
     .then(function(response) {
       return response.json()
     }).then(function(json) {

       console.log(json.list[0])

       // update state
       base.setState({
         day1:json.list[0],
         day2:json.list[1],
         day3:json.list[2],
         day4:json.list[3],
         day:json.list[4],


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


 <p>{this.state.day1.deg}</p>

          <div className='forecast'>

          <p>{}</p>


          </div>







      </form>
    );
  }
}


export default Form;
