from database.database import get_connection


def save_prediction(data):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO prediction_history(

            source,
            destination,
            journey_date,
            journey_time,

            distance,
            travel_time,

            weather,
            temperature,
            humidity,

            congestion_score,
            congestion_level,

            risk_score,
            risk_level,

            travel_score,
            ai_confidence

        )

        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        """,
        (

            data["source"],
            data["destination"],

            data["date"],
            data["time"],

            data["distance"],
            data["travel_time"],

            data["weather"],
            data["temperature"],
            data["humidity"],

            data["congestion_score"],
            data["congestion_level"],

            data["risk_score"],
            data["risk_level"],

            data["travel_score"],
            data["ai_confidence"]

        ),
    )

    conn.commit()
    conn.close()