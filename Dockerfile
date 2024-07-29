FROM eclipse-temurin:21-jre

RUN addgroup -S portfolio && adduser -S portfolio -G portfolio && mkdir -p /opt/rahmnathan-portfolio/config

ARG JAR_FILE
ADD target/$JAR_FILE /opt/rahmnathan-portfolio/rahmnathan-portfolio.jar

RUN chown -R portfolio:portfolio /opt/rahmnathan-portfolio

USER portfolio

WORKDIR /opt/rahmnathan-portfolio/
ENTRYPOINT java -jar rahmnathan-portfolio.jar