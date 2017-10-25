import React from 'react'

const personalInsightComponent = (props) => {
  debugger
  return(
    <div>
      <p>Here's how you score on the Big 5:</p>
      <ul>
        <li><strong>Openness</strong>: {props.personalInsight.insight.openness}%</li>
        <li><strong>Agreeableness</strong>: {props.personalInsight.insight.agreeableness}%</li>
        <li><strong>Extraversion</strong>: {props.personalInsight.insight.introversion_extraversion}%</li>
        <li><strong>Conscientiousness</strong>: {props.personalInsight.insight.conscientiousness}%</li>
        <li><strong>Emotional Range</strong>: {props.personalInsight.insight.emotional_range}%</li>
      </ul>
    </div>
  )
}

export default personalInsightComponent
