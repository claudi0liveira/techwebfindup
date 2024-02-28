SELECT
	occurrences.id 								AS 'OS id',
	occurrences.schedule_time 					AS 'Data do Atendimento',
	occurrences.checkin_date 					AS 'Horário de Check-In',
	occurrences.checkout_date 					AS 'Horário de Checkout',
	occurrences.description 					AS 'Escopo',
	occurrences_services.solution_description 	AS 'Solução do técnico',
	users_occurrences.name 						AS 'Nome de Contato',
	users_occurrences.email 					AS 'Email do contato no local',
	users_occurrences.signature 				AS 'Assinatura'
FROM
	occurrences
INNER JOIN
	occurrences_services
	ON occurrences_services.occurrence_id = occurrences.id
INNER JOIN
	users_occurrences
	ON users_occurrences.occurrence_id = occurrences.id
WHERE
	occurrences.schedule_time > '2023-10-16 17:30:00'
	AND occurrences.contract_id = 2009;