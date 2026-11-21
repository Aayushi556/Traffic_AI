
import sqlite3
import json
DATABASE_NAME = "traffic_ai.db"
# ==========================================
# Database Connection
# ==========================================
def get_connection():
    conn = sqlite3.connect(DATABASE_NAME)
    conn.row_factory = sqlite3.Row
    return conn
# ==========================================
# Create Table
# ==========================================
def create_table():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS prediction_history (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        user_id INTEGER,

        source TEXT,

        destination TEXT,

        journey_date TEXT,

        journey_time TEXT,

        distance REAL,

        travel_time REAL,

        weather TEXT,

        temperature REAL,

        humidity REAL,

        congestion_score REAL,

        congestion_level TEXT,

        risk_score TEXT,

        risk_level TEXT,

        travel_score INTEGER,

        ai_confidence REAL,

        prediction_json TEXT,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    """)
    conn.commit()
    conn.close()
    # ==========================================
# Create Users Table
# ==========================================

def create_users_table():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        name TEXT NOT NULL,

        email TEXT UNIQUE NOT NULL,

        password TEXT NOT NULL,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    """)
    conn.commit()
    conn.close()



    # ==========================================
# Create OTP Table
# ==========================================

def create_otp_table():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS otp_codes(

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        email TEXT NOT NULL,

        otp TEXT NOT NULL,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
    """)

    conn.commit()
    conn.close()


    # ==========================================
# Create User
# ==========================================

def create_user(name, email, password):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO users (
            name,
            email,
            password
        )
        VALUES (?, ?, ?)
    """, (name, email, password))

    conn.commit()
    conn.close()


# ==========================================
# Get User By Email
# ==========================================

def get_user_by_email(email):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email=?",
        (email,)
    )

    row = cursor.fetchone()

    conn.close()

    if row:
        return dict(row)

    return None


# ==========================================
# Save OTP
# ==========================================

def save_otp(email, otp):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM otp_codes WHERE email=?",
        (email,)
    )

    cursor.execute(
        """
        INSERT INTO otp_codes(
            email,
            otp
        )
        VALUES(?,?)
        """,
        (email, otp)
    )

    conn.commit()
    conn.close()

# ==========================================
# Get OTP
# ==========================================

def get_otp(email):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT *
        FROM otp_codes
        WHERE email=?
        ORDER BY id DESC
        LIMIT 1
        """,
        (email,)
    )

    row = cursor.fetchone()

    conn.close()

    if row:
        return dict(row)

    return None

# ==========================================
# Delete OTP
# ==========================================

def delete_otp(email):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM otp_codes WHERE email=?",
        (email,)
    )

    conn.commit()
    conn.close()
# ==========================================
# Save Prediction
# ==========================================

def save_prediction(user_id, data):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO prediction_history (

            user_id,
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
            ai_confidence,
            prediction_json

        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (

        user_id,
        data["source"],
        data["destination"],
        data["journey_date"],
        data["journey_time"],
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
        data["ai_confidence"],
        data["prediction_json"]

    ))

    conn.commit()
    conn.close()

# ==========================================
# Get All Predictions
# ==========================================

def get_all_predictions(user_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM prediction_history
        WHERE user_id = ?
        ORDER BY id DESC
    """, (user_id,))

    rows = cursor.fetchall()

    conn.close()

    return [dict(row) for row in rows]

    


# ==========================================
# Delete Single Prediction
# ==========================================

def delete_prediction(prediction_id, user_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM prediction_history WHERE id=? AND user_id=?",
        (prediction_id, user_id)
    )

    conn.commit()
    conn.close()


# ==========================================
# Delete All Predictions
# ==========================================

def delete_all_predictions(user_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM prediction_history WHERE user_id=?",
        (user_id,)
    )

    conn.commit()
    conn.close()

# ==========================================
# Get Prediction By ID
# ==========================================
def get_prediction_by_id(prediction_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM prediction_history WHERE id=?",
        (prediction_id,)
    )

    row = cursor.fetchone()

    conn.close()

    if row is None:
        return None

    row = dict(row)

    if row.get("prediction_json"):
        return json.loads(row["prediction_json"])

    return row