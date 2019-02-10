import React from 'react';

const technologiesStyle = {
    marginTop: 100,
    width: '100%',
    display: 'inline-block',
    bottom: 0
};

const titleStyle = {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    width: '100%',
    textDecoration: 'underline'
};

const imgStyle = {
    height: 70,
    display: 'inline-block',
    margin: 15
};

export const Technologies = () => {
    return (
        <div style={technologiesStyle}>
            <p style={titleStyle}>Technologies used to create, deploy, and monitor this system.</p>
            <img style={imgStyle} src="apache-camel.png" alt="Sorry!"/>
            <img style={imgStyle} src="docker-logo.png" alt="Sorry!"/>
            <img style={imgStyle} src="grafana-logo.png" alt="Sorry!"/>
            <img style={imgStyle} src="keycloak.png" alt="Sorry!"/>
            <img style={imgStyle} src="kubernetes-horizontal-color.png" alt="Sorry!"/>
            <img style={imgStyle} src="nginx.png" alt="Sorry!"/>
            <img style={imgStyle} src="openjdk.png" alt="Sorry!"/>
            <img style={imgStyle} src="postgresql-logo.png" alt="Sorry!"/>
            <img style={imgStyle} src="prometheus.png" alt="Sorry!"/>
            <img style={imgStyle} src="react-logo.png" alt="Sorry!"/>
            <img style={imgStyle} src="redis.png" alt="Sorry!"/>
            <img style={imgStyle} src="spring-boot.png" alt="Sorry!"/>
            <img style={imgStyle} src="ubuntu.png" alt="Sorry!"/>
            <img style={imgStyle} src="vault.png" alt="Sorry!"/>
        </div>
    );
};
