import React from 'react'

const personalInsightComponent = (props) => {

  return(
    <div>
      <p>Here's how you score on the Big 5:</p>
      <ul>
        <li><strong>Openness</strong>: {props.personalInsight.openness}%</li>
        <li><strong>Agreeableness</strong>: {props.personalInsight.agreeableness}%</li>
        <li><strong>Extraversion</strong>: {props.personalInsight.introversion_extraversion}%</li>
        <li><strong>Conscientiousness</strong>: {props.personalInsight.conscientiousness}%</li>
        <li><strong>Emotional Range</strong>: {props.personalInsight.emotional_range}%</li>
      </ul>
    </div>
  )
}

export default personalInsightComponent
