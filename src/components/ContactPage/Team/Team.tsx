import React from "react";
import { DUMMY_TEAM } from "@/dummyData/DummyData";
import Member from "./Member";
import HeadingH2 from "@/components/Typography/Headings/HeadingH2";
import styles from "./Team.module.scss";
import Text from "@/components/Typography/Text";
const Team = () => {
  return (
    <section className="container section-padding">
      <HeadingH2>Our team</HeadingH2>
      <div className={styles.team}>
        {DUMMY_TEAM.map((member) => {
          return <Member key={member.name} {...member} />;
        })}
      </div>
      <Text center>Feel free to contact any time!</Text>
    </section>
  );
};

export default Team;
