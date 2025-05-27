import React from 'react';
import styles from './calender.module.css';

const days = [
  { day: 'Mon', date: 25, times: ['11:00', '12:00', '13:00'] },
  { day: 'Tues', date: 26, times: ['09:00', '10:00', '11:00'], highlighted: true },
  { day: 'Wed', date: 27, times: ['12:00', '13:00', '14:00'] },
  { day: 'Thurs', date: 28, times: ['11:00', '12:00', '13:00'], highlighted: true },
  { day: 'Fri', date: 29, times: ['14:00', '15:00', '16:00'] },
  { day: 'Sat', date: 30, times: ['14:00', '15:00', '16:00'], highlighted: true },
  { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'], highlighted: true },
];

const Calender = () => {
  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.header}>
        <h3>October 2021</h3>
      </div>

      <div className={styles.calendarGrid}>
        {days.map((d, i) => (
          <div
            key={i}
            className={`${styles.dayColumn} ${d.highlighted ? styles.activeColumn : ''}`}
          >
            <div className={styles.dayLabel}>{d.day}</div>
            <div className={styles.dateLabel}>{d.date}</div>
            {d.times.map((t, idx) => (
              <div
                key={idx}
                className={`${styles.timeSlot} ${
                  d.highlighted && idx === 0 ? styles.highlightedTime : ''
                }`}
              >
                {t}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className={styles.cardsWrapper}>
        <div className={styles.card + ' ' + styles.dentist}>
          <div className={styles.cardTitle}>Dentist</div>
          <div className={styles.cardTime}>09:00–11:00</div>
          <div className={styles.cardDoctor}>Dr. Cameron Williamson</div>
        </div>

        <div className={styles.card + ' ' + styles.physio}>
          <div className={styles.cardTitle}>Physiotherapy Appointment</div>
          <div className={styles.cardTime}>11:00–12:00</div>
          <div className={styles.cardDoctor}>Dr. Kevin Djones</div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
