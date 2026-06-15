# Dockerized Portfolio Website

## Overview

This project demonstrates the containerization of a personal portfolio website using Docker and Nginx. The website consists of static HTML, CSS, and asset files that are served through an Nginx web server running inside a Docker container.

The project showcases fundamental DevOps concepts such as containerization, image creation, port mapping, and deployment readiness.

## Features

* Responsive portfolio website
* Containerized using Docker
* Nginx web server configuration
* Lightweight and portable deployment
* Easy setup and execution

## Technologies Used

* HTML5
* CSS3
* Docker
* Nginx
* Git & GitHub

## Project Structure

dockerized-portfolio-website/
├── index.html
├── style.css
├── Dockerfile
├── .dockerignore
└── README.md

## Docker Setup

### Build the Docker Image

docker build -t maya-portfolio .

### Run the Container

docker run -d -p 8080:80 maya-portfolio

### Access the Website

http://localhost:8080

## Learning Outcomes

* Created and managed Docker images
* Built and ran containers
* Implemented Nginx for static website hosting
* Practiced Git and GitHub version control
* Learned container-based deployment workflows

## Future Enhancements

* Deploy the containerized application on AWS EC2
* Implement CI/CD using Jenkins or GitHub Actions
* Add monitoring and logging
* Enhance portfolio content with additional projects

## Author

Maya Khetan

Aspiring DevOps Engineer and Cloud Enthusiast passionate about building scalable and deployable solutions using modern cloud and container technologies.
