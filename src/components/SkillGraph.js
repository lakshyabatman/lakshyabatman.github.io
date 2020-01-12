import React from 'react'
import {HorizontalBar} from 'react-chartjs-2'
import './style/SkillGraph.css'
class SkillGraph extends React.Component {
    constructor() {
        super()
        this.state = {
            data : {
                labels: ['NodeJS', 'ReactJS', 'VueJS', 'Javascript', 'Python', 'MongoDB', 'UI/UX'],
                datasets: [
                  {
                    label: 'Score',
                    backgroundColor: '#FFEA00',
                    borderColor: '#c9b902',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [7.5, 7, 7.5, 7.5, 7, 7, 6.5 ],
                    barPercentage: 0.9,
                    categoryPercentage: 0.6
                  }
                ]
            },
            options :{
                animation :{
                    duration:3000
                },
                responsive:true,
                legend :{
                    display:false,
        
                },
                scales: {
                    yAxes: [{
                        gridLines : {
                            display:false
                        },    
                        ticks : {
                            fontSize: 20,
                            fontColor:'#FFFFFF'
                        },
        
                        
                    }],
                    xAxes: [{
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        },
        
                        gridLines : {
                            display:false
                        },
                    }]
                }
            } 
        }
        if(window.innerWidth<=400) {
            this.state.options.scales.yAxes[0].ticks.fontSize = 12
        }
    }
    render () {
        return (
            <div id='graph-wrapper'>
                <h1 className='head'>My Skills</h1>
                <HorizontalBar
                data={this.state.data}
                options={this.state.options}
                height={70}
                width={200}
                />
            </div>
        )
    }

}
export default SkillGraph