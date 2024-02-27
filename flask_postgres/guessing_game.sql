DROP TABLE IF EXISTS low_responses;
CREATE TABLE low_responses(
    id serial PRIMARY KEY,
    response VARCHAR(255)
);
COPY low_responses from '/Users/crystaljobe/code_platoon/week-five/html-number-guessing-game/data/lowResponses.csv' DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS high_responses;
CREATE TABLE high_responses(
    id serial PRIMARY KEY,
    response VARCHAR(255)
);
COPY high_responses from '/Users/crystaljobe/code_platoon/week-five/html-number-guessing-game/data/highResponses.csv' DELIMITER ',' CSV HEADER;