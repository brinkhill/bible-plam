import styles from "./page.module.css";

export default function Home() {
 const result = findPassageByDate(jsonString);
 return (
  <main className={styles.main}>
   <div>
    <p className={styles.date}>{result?.Date}</p>
    <p className={styles.scripture}>{result?.Passage}</p>
   </div>
  </main>
 );
}

function findPassageByDate(jsonString: string): { Date: string; Passage: string } | null {
 // Parse the JSON string into an array of objects
 const passages: { Date: string; Passage: string }[] = JSON.parse(jsonString);

 // Get today's date
 const today: Date = new Date();

 // Subtract one day from the current date
 //  today.setDate(today.getDate() - 1);

 // Get the formatted date as YYYY-MM-DD
 const formattedDate: string = today.toISOString().split("T")[0];
 //  const formattedDate = "2023-06-30";
 // Find the passage with yesterday's date
 const passage = passages.find((item) => item.Date === formattedDate);

 // Return the date and passage if found, otherwise return null
 return passage ? { Date: passage.Date, Passage: passage.Passage } : null;
}

// Example usage
const jsonString =
 '[{"Date":"2023-06-28","Passage":"WOOOO"},{"Date":"2023-06-29","Passage":"Gen 1-2"},{"Date":"2023-06-30","Passage":"Gen 3-5"},{"Date":"2023-07-01","Passage":""},{"Date":"2023-07-02","Passage":""},{"Date":"2023-07-03","Passage":"Gen 6-8"},{"Date":"2023-07-04","Passage":"Gen 9-11"},{"Date":"2023-07-05","Passage":"Gen 12-14"},{"Date":"2023-07-06","Passage":"Gen 15-17"},{"Date":"2023-07-07","Passage":"Gen 18-20"},{"Date":"2023-07-08","Passage":""},{"Date":"2023-07-09","Passage":""},{"Date":"2023-07-10","Passage":"Gen 21-23"},{"Date":"2023-07-11","Passage":"Gen 24-26"},{"Date":"2023-07-12","Passage":"Gen 27-29"},{"Date":"2023-07-13","Passage":"Gen 30-32"},{"Date":"2023-07-14","Passage":"Gen 33-35"},{"Date":"2023-07-15","Passage":""},{"Date":"2023-07-16","Passage":""},{"Date":"2023-07-17","Passage":"Gen 36-38"},{"Date":"2023-07-18","Passage":"Gen 39-41"},{"Date":"2023-07-19","Passage":"Gen 42-44"},{"Date":"2023-07-20","Passage":"Gen 45-47"},{"Date":"2023-07-21","Passage":"Gen 48-50"},{"Date":"2023-07-22","Passage":""},{"Date":"2023-07-23","Passage":""},{"Date":"2023-07-24","Passage":"Ex 1-3"},{"Date":"2023-07-25","Passage":"Ex 4-6"},{"Date":"2023-07-26","Passage":"Ex 7-9"},{"Date":"2023-07-27","Passage":"Ex 10-12"},{"Date":"2023-07-28","Passage":"Ex 13-15"},{"Date":"2023-07-29","Passage":""},{"Date":"2023-07-30","Passage":""},{"Date":"2023-07-31","Passage":"Ex 16-18"},{"Date":"2023-08-01","Passage":"Ex 19-21"},{"Date":"2023-08-02","Passage":"Ex 22-24"},{"Date":"2023-08-03","Passage":"Ex 25-27"},{"Date":"2023-08-04","Passage":"Ex 28-30"},{"Date":"2023-08-05","Passage":""},{"Date":"2023-08-06","Passage":""},{"Date":"2023-08-07","Passage":"Ex 31-33"},{"Date":"2023-08-08","Passage":"Ex 34-36"},{"Date":"2023-08-09","Passage":"Ex 37-39"},{"Date":"2023-08-10","Passage":"Ex 40; Lev 1-2"},{"Date":"2023-08-11","Passage":"Lev 3-5"},{"Date":"2023-08-12","Passage":""},{"Date":"2023-08-13","Passage":""},{"Date":"2023-08-14","Passage":"Lev 6-8"},{"Date":"2023-08-15","Passage":"Lev 9-11"},{"Date":"2023-08-16","Passage":"Lev 12-14"},{"Date":"2023-08-17","Passage":"Lev 15-17"},{"Date":"2023-08-18","Passage":"Lev 18-20"},{"Date":"2023-08-19","Passage":""},{"Date":"2023-08-20","Passage":""},{"Date":"2023-08-21","Passage":"Lev 21-23"},{"Date":"2023-08-22","Passage":"Lev 24-26"},{"Date":"2023-08-23","Passage":"Lev 27; Num 1-2"},{"Date":"2023-08-24","Passage":"Num 3-5"},{"Date":"2023-08-25","Passage":"Num 6-8"},{"Date":"2023-08-26","Passage":""},{"Date":"2023-08-27","Passage":""},{"Date":"2023-08-28","Passage":"Num 9-11"},{"Date":"2023-08-29","Passage":"Num 12-14"},{"Date":"2023-08-30","Passage":"Num 15-17"},{"Date":"2023-08-31","Passage":"Num 18-20"},{"Date":"2023-09-01","Passage":"Num 21-23"},{"Date":"2023-09-02","Passage":""},{"Date":"2023-09-03","Passage":""},{"Date":"2023-09-04","Passage":"Num 24-26"},{"Date":"2023-09-05","Passage":"Num 27-29"},{"Date":"2023-09-06","Passage":"Num 30-32"},{"Date":"2023-09-07","Passage":"Num 33-35"},{"Date":"2023-09-08","Passage":"Num 36; Deut 1-2"},{"Date":"2023-09-09","Passage":""},{"Date":"2023-09-10","Passage":""},{"Date":"2023-09-11","Passage":"Deut 3-5"},{"Date":"2023-09-12","Passage":"Deut 6-8"},{"Date":"2023-09-13","Passage":"Deut 9-11"},{"Date":"2023-09-14","Passage":"Deut 12-14"},{"Date":"2023-09-15","Passage":"Deut 15-17"},{"Date":"2023-09-16","Passage":""},{"Date":"2023-09-17","Passage":""},{"Date":"2023-09-18","Passage":"Deut 18-20"},{"Date":"2023-09-19","Passage":"Deut 21-23"},{"Date":"2023-09-20","Passage":"Deut 24-26"},{"Date":"2023-09-21","Passage":"Deut 27-29"},{"Date":"2023-09-22","Passage":"Deut 30-32"},{"Date":"2023-09-23","Passage":""},{"Date":"2023-09-24","Passage":""},{"Date":"2023-09-25","Passage":"Deut 33-34; Josh 1"},{"Date":"2023-09-26","Passage":"Josh 2-4"},{"Date":"2023-09-27","Passage":"Josh 5-7"},{"Date":"2023-09-28","Passage":"Josh 8-9"},{"Date":"2023-09-29","Passage":"Josh 10-12"},{"Date":"2023-09-30","Passage":""},{"Date":"2023-10-01","Passage":""},{"Date":"2023-10-02","Passage":"Josh 13-15"},{"Date":"2023-10-03","Passage":"Josh 16-18"},{"Date":"2023-10-04","Passage":"Josh 19-21"},{"Date":"2023-10-05","Passage":"Josh 22-24"},{"Date":"2023-10-06","Passage":"Jdg 1-3"},{"Date":"2023-10-07","Passage":""},{"Date":"2023-10-08","Passage":""},{"Date":"2023-10-09","Passage":"Jdg 4-6"},{"Date":"2023-10-10","Passage":"Jdg 7-9"},{"Date":"2023-10-11","Passage":"Jdg 10-12"},{"Date":"2023-10-12","Passage":"Jdg 13-15"},{"Date":"2023-10-13","Passage":"Jdg 16-18"},{"Date":"2023-10-14","Passage":""},{"Date":"2023-10-15","Passage":""},{"Date":"2023-10-16","Passage":"Jdg 19-21"},{"Date":"2023-10-17","Passage":"Rut 1-3"},{"Date":"2023-10-18","Passage":"Rut 4; 1 Sa 1-2"},{"Date":"2023-10-19","Passage":"1 Sa 3-5"},{"Date":"2023-10-20","Passage":"1 Sa 6-8"},{"Date":"2023-10-21","Passage":""},{"Date":"2023-10-22","Passage":""},{"Date":"2023-10-23","Passage":"1 Sa 9-11"},{"Date":"2023-10-24","Passage":"1 Sa 12-14"},{"Date":"2023-10-25","Passage":"1 Sa 15-17"},{"Date":"2023-10-26","Passage":"1 Sa 18-20"},{"Date":"2023-10-27","Passage":"1 Sa 21-23"},{"Date":"2023-10-28","Passage":""},{"Date":"2023-10-29","Passage":""},{"Date":"2023-10-30","Passage":"1 Sa 24-26"},{"Date":"2023-10-31","Passage":"1 Sa 27-29"},{"Date":"2023-11-01","Passage":"1 Sa 30-31; 2 Sa 1"},{"Date":"2023-11-02","Passage":"2 Sa 2-4"},{"Date":"2023-11-03","Passage":"2 Sa 5-7"},{"Date":"2023-11-04","Passage":""},{"Date":"2023-11-05","Passage":""},{"Date":"2023-11-06","Passage":"2 Sa 8-10"},{"Date":"2023-11-07","Passage":"2 Sa 11-13"},{"Date":"2023-11-08","Passage":"2 Sa 14-16"},{"Date":"2023-11-09","Passage":"2 Sa 17-19"},{"Date":"2023-11-10","Passage":"2 Sa 20-22"},{"Date":"2023-11-11","Passage":""},{"Date":"2023-11-12","Passage":""},{"Date":"2023-11-13","Passage":"2 Sa 23-24; 1 Kgs 1"},{"Date":"2023-11-14","Passage":"1 Kgs 2-4"},{"Date":"2023-11-15","Passage":"1 Kgs 5-7"},{"Date":"2023-11-16","Passage":"1 Kgs 8-10"},{"Date":"2023-11-17","Passage":"1 Kgs 11-13"},{"Date":"2023-11-18","Passage":""},{"Date":"2023-11-19","Passage":""},{"Date":"2023-11-20","Passage":"1 Kgs 14-16"},{"Date":"2023-11-21","Passage":"1 Kgs 17-19"},{"Date":"2023-11-22","Passage":"1 Kgs 20-22"},{"Date":"2023-11-23","Passage":"2 Kgs 1-3"},{"Date":"2023-11-24","Passage":"2 Kgs 4-6"},{"Date":"2023-11-25","Passage":""},{"Date":"2023-11-26","Passage":""},{"Date":"2023-11-27","Passage":"2 Kgs 7-9"},{"Date":"2023-11-28","Passage":"2 Kgs 10-12"},{"Date":"2023-11-29","Passage":"2 Kgs 13-15"},{"Date":"2023-11-30","Passage":"2 Kgs 16-18"},{"Date":"2023-12-01","Passage":"2 Kgs 19-21"},{"Date":"2023-12-02","Passage":""},{"Date":"2023-12-03","Passage":""},{"Date":"2023-12-04","Passage":"2 Kgs 22-24"},{"Date":"2023-12-05","Passage":"2 Kgs 25; 1 Chr 1-2"},{"Date":"2023-12-06","Passage":"1 Chr 3-5"},{"Date":"2023-12-07","Passage":"1 Chr 6-8"},{"Date":"2023-12-08","Passage":"1 Chr 9-11"},{"Date":"2023-12-09","Passage":""},{"Date":"2023-12-10","Passage":""},{"Date":"2023-12-11","Passage":"1 Chr 12-14"},{"Date":"2023-12-12","Passage":"1 Chr 15-17"},{"Date":"2023-12-13","Passage":"1 Chr 18-20"},{"Date":"2023-12-14","Passage":"1 Chr 21-23"},{"Date":"2023-12-15","Passage":"1 Chr 24-26"},{"Date":"2023-12-16","Passage":""},{"Date":"2023-12-17","Passage":""},{"Date":"2023-12-18","Passage":"1 Chr 27-29"},{"Date":"2023-12-19","Passage":"2 Chr 1-3"},{"Date":"2023-12-20","Passage":"2 Chr 4-6"},{"Date":"2023-12-21","Passage":"2 Chr 7-9"},{"Date":"2023-12-22","Passage":"2 Chr 10-12"},{"Date":"2023-12-23","Passage":""},{"Date":"2023-12-24","Passage":""},{"Date":"2023-12-25","Passage":"2 Chr 13-15"},{"Date":"2023-12-26","Passage":"2 Chr 16-18"},{"Date":"2023-12-27","Passage":"2 Chr 19-21"},{"Date":"2023-12-28","Passage":"2 Chr 22-23"},{"Date":"2023-12-29","Passage":"2 Chr 24-26"},{"Date":"2023-12-30","Passage":""},{"Date":"2023-12-31","Passage":""},{"Date":"2024-01-01","Passage":"2 Chr 27-29"},{"Date":"2024-01-02","Passage":"2 Chr 30-32"},{"Date":"2024-01-03","Passage":"2 Chr 33-35"},{"Date":"2024-01-04","Passage":"2 Chr 36; Ezr 1-2"},{"Date":"2024-01-05","Passage":"Ezr 3-5"},{"Date":"2024-01-06","Passage":""},{"Date":"2024-01-07","Passage":""},{"Date":"2024-01-08","Passage":"Ezr 6-8"},{"Date":"2024-01-09","Passage":"Ezr 9-10; Neh 1"},{"Date":"2024-01-10","Passage":"Neh 2-4"},{"Date":"2024-01-11","Passage":"Neh 5-7"},{"Date":"2024-01-12","Passage":"Neh 8-10"},{"Date":"2024-01-13","Passage":""},{"Date":"2024-01-14","Passage":""},{"Date":"2024-01-15","Passage":"Neh 11-13"},{"Date":"2024-01-16","Passage":"Est 1-3"},{"Date":"2024-01-17","Passage":"Est 4-6"},{"Date":"2024-01-18","Passage":"Est 7-9"},{"Date":"2024-01-19","Passage":"Est 10; Job 1-2"},{"Date":"2024-01-20","Passage":""},{"Date":"2024-01-21","Passage":""},{"Date":"2024-01-22","Passage":"Job 3-5"},{"Date":"2024-01-23","Passage":"Job 6-8"},{"Date":"2024-01-24","Passage":"Job 9-11"},{"Date":"2024-01-25","Passage":"Job 12-14"},{"Date":"2024-01-26","Passage":"Job 15-17"},{"Date":"2024-01-27","Passage":""},{"Date":"2024-01-28","Passage":""},{"Date":"2024-01-29","Passage":"Job 18-20"},{"Date":"2024-01-30","Passage":"Job 21-23"},{"Date":"2024-01-31","Passage":"Job 24-26"},{"Date":"2024-02-01","Passage":"Job 27-29"},{"Date":"2024-02-02","Passage":"Job 30-32"},{"Date":"2024-02-03","Passage":""},{"Date":"2024-02-04","Passage":""},{"Date":"2024-02-05","Passage":"Job 33-35"},{"Date":"2024-02-06","Passage":"Job 36-38"},{"Date":"2024-02-07","Passage":"Job 39-41"},{"Date":"2024-02-08","Passage":"Job 42; Pro 1-2"},{"Date":"2024-02-09","Passage":"Pro 3-5"},{"Date":"2024-02-10","Passage":""},{"Date":"2024-02-11","Passage":""},{"Date":"2024-02-12","Passage":"Pro 6-8"},{"Date":"2024-02-13","Passage":"Pro 9-11"},{"Date":"2024-02-14","Passage":"Pro 12-14"},{"Date":"2024-02-15","Passage":"Pro 15-17"},{"Date":"2024-02-16","Passage":"Pro 18-20"},{"Date":"2024-02-17","Passage":""},{"Date":"2024-02-18","Passage":""},{"Date":"2024-02-19","Passage":"Pro 21-23"},{"Date":"2024-02-20","Passage":"Pro 24-26"},{"Date":"2024-02-21","Passage":"Pro 27-29"},{"Date":"2024-02-22","Passage":"Pro 30-31; Ecc 1"},{"Date":"2024-02-23","Passage":"Ecc 2-4"},{"Date":"2024-02-24","Passage":""},{"Date":"2024-02-25","Passage":""},{"Date":"2024-02-26","Passage":"Ecc 5-7"},{"Date":"2024-02-27","Passage":"Ecc 8-10"},{"Date":"2024-02-28","Passage":"Ecc 11-12; Sos 1"},{"Date":"2024-02-29","Passage":"Sos 2-4"},{"Date":"2024-03-01","Passage":"Sos 5-7"},{"Date":"2024-03-02","Passage":""},{"Date":"2024-03-03","Passage":""},{"Date":"2024-03-04","Passage":"Sos 8; Isa 1-2"},{"Date":"2024-03-05","Passage":"Isa 3-5"},{"Date":"2024-03-06","Passage":"Isa 6-8"},{"Date":"2024-03-07","Passage":"Isa 9-11"},{"Date":"2024-03-08","Passage":"Isa 12-14"},{"Date":"2024-03-09","Passage":""},{"Date":"2024-03-10","Passage":""},{"Date":"2024-03-11","Passage":"Isa 15-17"},{"Date":"2024-03-12","Passage":"Isa 18-20"},{"Date":"2024-03-13","Passage":"Isa 21-23"},{"Date":"2024-03-14","Passage":"Isa 24-26"},{"Date":"2024-03-15","Passage":"Isa 27-29"},{"Date":"2024-03-16","Passage":""},{"Date":"2024-03-17","Passage":""},{"Date":"2024-03-18","Passage":"Isa 30-32"},{"Date":"2024-03-19","Passage":"Isa 33-35"},{"Date":"2024-03-20","Passage":"Isa 36-38"},{"Date":"2024-03-21","Passage":"Isa 39-41"},{"Date":"2024-03-22","Passage":"Isa 42-44"},{"Date":"2024-03-23","Passage":""},{"Date":"2024-03-24","Passage":""},{"Date":"2024-03-25","Passage":"Isa 45-47"},{"Date":"2024-03-26","Passage":"Isa 48-50"},{"Date":"2024-03-27","Passage":"Isa 51-53"},{"Date":"2024-03-28","Passage":"Isa 54-55"},{"Date":"2024-03-29","Passage":"Isa 56-58"},{"Date":"2024-03-30","Passage":""},{"Date":"2024-03-31","Passage":""},{"Date":"2024-04-01","Passage":"Isa 59-61"},{"Date":"2024-04-02","Passage":"Isa 62-64"},{"Date":"2024-04-03","Passage":"Isa 65-66; Jer 1"},{"Date":"2024-04-04","Passage":"Jer 2-4"},{"Date":"2024-04-05","Passage":"Jer 5-7"},{"Date":"2024-04-06","Passage":""},{"Date":"2024-04-07","Passage":""},{"Date":"2024-04-08","Passage":"Jer 8-10"},{"Date":"2024-04-09","Passage":"Jer 11-13"},{"Date":"2024-04-10","Passage":"Jer 14-16"},{"Date":"2024-04-11","Passage":"Jer 17-19"},{"Date":"2024-04-12","Passage":"Jer 20-22"},{"Date":"2024-04-13","Passage":""},{"Date":"2024-04-14","Passage":""},{"Date":"2024-04-15","Passage":"Jer 23-25"},{"Date":"2024-04-16","Passage":"Jer 26-28"},{"Date":"2024-04-17","Passage":"Jer 29-31"},{"Date":"2024-04-18","Passage":"Jer 32-34"},{"Date":"2024-04-19","Passage":"Jer 35-37"},{"Date":"2024-04-20","Passage":""},{"Date":"2024-04-21","Passage":""},{"Date":"2024-04-22","Passage":"Jer 38-40"},{"Date":"2024-04-23","Passage":"Jer 41-43"},{"Date":"2024-04-24","Passage":"Jer 44-46"},{"Date":"2024-04-25","Passage":"Jer 47-49"},{"Date":"2024-04-26","Passage":"Jer 50-52"},{"Date":"2024-04-27","Passage":""},{"Date":"2024-04-28","Passage":""},{"Date":"2024-04-29","Passage":"Lam 1-3"},{"Date":"2024-04-30","Passage":"Lam 4-5; Eze 1"},{"Date":"2024-05-01","Passage":"Eze 2-4"},{"Date":"2024-05-02","Passage":"Eze 5-7"},{"Date":"2024-05-03","Passage":"Eze 8-10"},{"Date":"2024-05-04","Passage":""},{"Date":"2024-05-05","Passage":""},{"Date":"2024-05-06","Passage":"Eze 11-13"},{"Date":"2024-05-07","Passage":"Eze 14-16"},{"Date":"2024-05-08","Passage":"Eze 17-19"},{"Date":"2024-05-09","Passage":"Eze 20-22"},{"Date":"2024-05-10","Passage":"Eze 23-25"},{"Date":"2024-05-11","Passage":""},{"Date":"2024-05-12","Passage":""},{"Date":"2024-05-13","Passage":"Eze 26-28"},{"Date":"2024-05-14","Passage":"Eze 29-31"},{"Date":"2024-05-15","Passage":"Eze 32-34"},{"Date":"2024-05-16","Passage":"Eze 35-37"},{"Date":"2024-05-17","Passage":"Eze 38-40"},{"Date":"2024-05-18","Passage":""},{"Date":"2024-05-19","Passage":""},{"Date":"2024-05-20","Passage":"Eze 41-43"},{"Date":"2024-05-21","Passage":"Eze 44-46"},{"Date":"2024-05-22","Passage":"Eze 47-48; Dan 1"},{"Date":"2024-05-23","Passage":"Dan 2-4"},{"Date":"2024-05-24","Passage":"Dan 5-7"},{"Date":"2024-05-25","Passage":""},{"Date":"2024-05-26","Passage":""},{"Date":"2024-05-27","Passage":"Dan 8-10"},{"Date":"2024-05-28","Passage":"Dan 11-12; Hos 1"},{"Date":"2024-05-29","Passage":"Hos 2-4"},{"Date":"2024-05-30","Passage":"Hos 5-7"},{"Date":"2024-05-31","Passage":"Hos 8-10"},{"Date":"2024-06-01","Passage":""},{"Date":"2024-06-02","Passage":""},{"Date":"2024-06-03","Passage":"Hos 11-13"},{"Date":"2024-06-04","Passage":"Hos 14; Joe 1-2"},{"Date":"2024-06-05","Passage":"Joe 3; Amo 1-2"},{"Date":"2024-06-06","Passage":"Amo 3-5"},{"Date":"2024-06-07","Passage":"Amo 6-8"},{"Date":"2024-06-08","Passage":""},{"Date":"2024-06-09","Passage":""},{"Date":"2024-06-10","Passage":"Amo 9; Oba; Jon 1"},{"Date":"2024-06-11","Passage":"Jon 2-4"},{"Date":"2024-06-12","Passage":"Mic 1-3"},{"Date":"2024-06-13","Passage":"Mic 4-6"},{"Date":"2024-06-14","Passage":"Mic 7; Nah 1-2"},{"Date":"2024-06-15","Passage":""},{"Date":"2024-06-16","Passage":""},{"Date":"2024-06-17","Passage":"Nah 3; Hab 1-2"},{"Date":"2024-06-18","Passage":"Hab 3; Zep 1-2"},{"Date":"2024-06-19","Passage":"Zep 3; Hag 1-2"},{"Date":"2024-06-20","Passage":"Zec 1-3"},{"Date":"2024-06-21","Passage":"Zec 4-6"},{"Date":"2024-06-22","Passage":""},{"Date":"2024-06-23","Passage":""},{"Date":"2024-06-24","Passage":"Zec 7-9"},{"Date":"2024-06-25","Passage":"Zec 10-12"},{"Date":"2024-06-26","Passage":"Zec 13-14; Mal 1"},{"Date":"2024-06-27","Passage":"Mal 2-4"}]';
// const result = findPassageByDate(jsonString);

// if (result) {
//  console.log("Today's date:", result.Date);
//  console.log("Corresponding passage:", result.Passage);
// } else {
//  console.log("No passage found for today's date.");
// }
