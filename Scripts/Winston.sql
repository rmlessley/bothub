select * from WINSTON_BETS_DIRECT;

select * from WINSTON_USER;

select * from bet_status;


drop table WINSTON_BETS_DIRECT;
drop table WINSTON_USER;
drop table BET_STATUS;

CREATE TABLE BET_STATUS(
    bet_status number(5),
    bet_status_text varchar2(150) not null,
    constraint bet_status_pk primary key (bet_status)
);

CREATE TABLE WINSTON_USER (
    user_id number(5),
    DISCORD_ID varchar2(150) not null,
    USER_NAME varchar2(150) not null unique,
    constraint WINSTON_USER_PK primary key (user_id)
);

CREATE TABLE WINSTON_BETS_DIRECT (
    BET_ID number(5),
    USER1 varchar2(150),
    USER2 varchar2(150),
    BET_AMOUNT number(5),
    BET_STATUS number(5),
    BET_DETAILS varchar(150),
    constraint WINSTON_BETS_DIRECT_PK primary key (BET_ID),
    constraint USER1_FK Foreign key (USER1) REFERENCES WINSTON_USER(user_name),
    constraint USER2_FK FOREIGN KEy (USER2)  REFERENCES WINSTON_USER(user_name),
    constraint BET_STATUS_FK foreign key (bet_status) References BET_STATUS(bet_status)
);

DROP SEQUENCE WINSTON_USER_SEQ;
DROP SEQUENCE DIRECT_BET_SEQ;
CREATE SEQUENCE WINSTON_USER_SEQ
    start with 1
    increment by 1;

CREATE SEQUENCE DIRECT_BET_SEQ
    start with 1
    increment by 1;

CREATE OR REPLACE TRIGGER USER_TRIGGER
BEFORE INSERT ON WINSTON_USER
FOR EACH ROW
BEGIN
    IF :new.user_id IS NULL THEN
    SELECT winston_user_seq.nextval INTO :new.user_id from dual;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER DIRECT_BET_TRIGGER
BEFORE INSERT ON WINSTON_BETS_DIRECT
FOR EACH ROW
BEGIN
    IF :new.BET_ID IS NULL THEN
    SELECT DIRECT_BET_seq.nextval INTO :new.bet_id from dual;
    END IF;
END;

insert into BET_STATUS VALUES(1, 'RESULT PENDING');
insert into BET_STATUS VALUES(2, 'WINNER USER1');
insert into BET_STATUS VALUES(3, 'WINNER USER2');
insert into BET_STATUS VALUES(4, 'PAID USER1');
insert into BET_STATUS VALUES(5, 'PAID USER2');
insert into BET_STATUS VALUES(6, 'BET CANCELED');