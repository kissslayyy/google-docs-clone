"use client"
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            © {new Date().getFullYear()} IIST Bihar. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://iistbihar.com" className="hover:text-gray-300">IIST Bihar</a>
                        <a href="https://sparkovationhub.com" className="hover:text-gray-300">Sparkovation Hub</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer