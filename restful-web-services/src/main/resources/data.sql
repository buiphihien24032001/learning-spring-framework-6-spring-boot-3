insert into users_detail (NAME, BIRTH_DATE) values('admin', current_date()), ('James', current_date()),('Neih', current_date());
insert into post (USER_ID, DESCRIPTION) values (1, 'Tip for good at English'), (1, 'How to deploy Spring application')
, (2, 'A-Z docker in 2 hours');


insert into todo (USERNAME, DESCRIPTION, TARGET_DATE, DONE)
values ('James', 'payment Credit card', current_date(),false), ('James', 'Eat lunch on 5Floor', current_date(),false);