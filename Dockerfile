FROM adoptopenjdk/openjdk11:alpine-jre

RUN mkdir /opt/rahmnathan-portfolio && mkdir /opt/rahmnathan-portfolio/config

ARG JAR_FILE
ADD target/$JAR_FILE /opt/rahmnathan-portfolio/rahmnathan-portfolio.jar

WORKDIR /opt/rahmnathan-portfolio/
ENTRYPOINT java -jar rahmnathan-portfolio.jar