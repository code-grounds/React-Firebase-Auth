import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Card, Button, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import TopBar from './AppBar'

export default function Profile() {
    const { currentUser } = useAuth()
    return (
        <>
            <TopBar />
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
          </Link>
                </Card.Body>
            </Card>
        </>
    )
}
