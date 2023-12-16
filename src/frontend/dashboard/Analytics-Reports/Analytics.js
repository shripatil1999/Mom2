import React from 'react'
import GlobalLayout from '../../utils/hoc/globalLayout'

const Analytics = () => {
 let score='6.8'
 let TotalTaskToday='4'
 let TotalTaskCompletionPercentage='70%'
 let Performance='Outstanding'
 let username='Mr. XYZ'

    return (
        <GlobalLayout>
            <div className="header">
                <div className="profile-img">

                </div>
                <div className="message">
                    <p>Hii,  <strong> {username} </strong></p>
                    <p>Today, you have achieved a score of <strong>{score}</strong> . You are tasked with completing  <strong> {TotalTaskToday}</strong>.  tasks, and
                        your progress stands at  <strong> {TotalTaskCompletionPercentage}</strong>. Your performance can be described as  <strong> {Performance}</strong>.</p>
                </div>
            </div>

        </GlobalLayout>
    )
}

export default Analytics
