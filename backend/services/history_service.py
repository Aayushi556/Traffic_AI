from database.database import get_connection


def get_all_predictions():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM prediction_history
        ORDER BY id DESC
    """)

    rows = cursor.fetchall()

    conn.close()

    return [dict(row) for row in rows]


def delete_prediction(prediction_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM prediction_history WHERE id=?",
        (prediction_id,)
    )

    conn.commit()
    conn.close()


def delete_all_predictions():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM prediction_history"
    )

    conn.commit()
    conn.close()