# <a href= "https://www.inteli.edu.br/"><img src="/imagens/logointeli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a> Instituto de Tecnologia e Liderança 

# Kondo

## Montech

## :student: Integrantes: 
- <a href="https://www.linkedin.com/in/luiscmiranda/">Luis Miranda</a>

- <a href="https://www.linkedin.com/in/mauricio-felicissimo-475024240/">Mauricio Felicissimo</a>
- <a href="https://www.linkedin.com/in/eduarda-gonzaga-009794219/">Eduarda Gonzaga</a> 
- <a href="https://www.linkedin.com/in/joao-victor-montagna-4bb3a4247/">João Montagna</a> 
- <a href="https://www.linkedin.com/in/renan-ribeiro-31a205247/">Renan Ribeiro</a>
- <a href="https://www.linkedin.com/in/yuri-toledo-964123230/">Yuri Toledo</a>

## :teacher: Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/vanunes/">Vanessa Nunes</a>
### Instrutores
- <a href="https://www.linkedin.com/in/jose-romualdo/">Programação - José Romualdo</a>
- <a href="https://www.linkedin.com/in/seulogin/">Matemática e Física - Geraldo Vasconcelos</a>
- <a href="https://www.linkedin.com/in/seulogin/">Negócios - Lisane Valdo</a>
- <a href="https://www.linkedin.com/in/seulogin/">Design - Guilherme Henrique de Oliveira Cestari</a> 
- <a href="https://www.linkedin.com/in/seulogin/">Liderança - Filipe Gonçalves</a>


## Conteúdo
**[1. Visão Geral do Projeto](#1-visão-geral-do-projeto)**

  * [1.1. Parceiro de Negócios](#11-parceiro-de-negócios)
    * [1.1.1. Partes Interessadas](#111-partes-interessadas)
    * [1.1.2. Análise da Indústria](#112-análise-da-indústria)
  * [1.2. Problema](#12-problema)
    * [1.2.1. Análise do Problema](#121-análise-do-problema)
    * [1.2.2 Análise do cenário: Matriz SWOT](#122-análise-do-cenário-matriz-swot)
  * [1.3. Descritivo da Solução](#13-descritivo-da-solução)
    * [1.3.1. Objetivos](#131-objetivos)
    * [1.3.2. Proposta de Valor: Value Proposition Canvas](#132-proposta-de-valor-value-proposition-canvas)
    * [1.3.3. Matriz de Risco](#133-matriz-de-risco)
  * [1.4. Proposta Tecnológica e Benefícios](#14-proposta-tecnológica-e-benefícios)
    * [1.4.1. Tipo de arquitetura de nuvem escolhida](#141-tipo-de-arquitetura-de-nuvem-escolhida)
    * [1.4.2. Arquitetura de nuvem escolhida](#142-arquitetura-de-nuvem-escolhida)
    * [1.4.3. Benefícios trazidos pela arquitetura de nuvem proposta](#143-benefícios-trazidos-pela-arquitetura-de-nuvem-proposta)

**[2. Entendimento da Experiência do Usuário](#2-entendimento-da-experiência-do-usuário)**

  * [2.1. Perfis de Usuários](#21-perfis-de-usuários)
    * [2.1.1. Personas](#211-personas)
  * [2.2. Mapa de Jornada do Usuário](#22-mapa-de-jornada-do-usuário)
  * [2.3. Wireframes](#23-wireframes)

**[3. Requisitos](#3-requisitos)**

  * [3.1. Requisitos Funcionais](#31-requisitos-funcionais)
    * [3.1.1. Casos de Uso](#311-casos-de-uso)
    * [3.1.2. User Stories](#312-user-stories)
  * [3.2. Requisitos não Funcionais](#32-requisitos-não-funcionais)

**[4. Arquitetura do Sistema](#4-arquitetura-do-sistema)**

  * [4.1. Diagrama de Arquitetura](#41-diagrama-de-arquitetura)
  * [4.2. Diagrama de Implantação](#42-diagrama-de-implantação)
    * [4.2.1. Procedimentos de implantação da solução](#421-componentes-que-compões-a-solução)
    * [4.2.2. Procedimentos de implantação da solução](#422-procedimentos-de-implantação-da-solução)
  * [4.3. Diagrama de Sequência](#43-diagrama-de-sequência)

**[5. Projeto e Implementação UX e UI](#5-projeto-e-implementação-ux-e-ui)**

  **[5.1. Frontend](#51-frontend)**

**[6. Projeto de Banco de Dados](#6-projeto-de-banco-de-dados)**

  **[6.1. Modelo Conceitual](#61-modelo-conceitual)**
  **[6.2. Modelo Lógico](#62-modelo-lógico)**

**[7. Testes de Software](#7-testes-de-software)**

**[8. Documentação da API](#8-documentação-da-api)**

**[Referências](#referências)**

**[Apêndice](#apêndice)**

# 1. Visão Geral do Projeto

## 1.1 Parceiro de Negócios

Fundado em 2020, o Inteli (Instituto de Tecnologia e Liderança) é uma instituição de Ensino Superior privada brasileira, sem fins lucrativos, localizada em São Paulo, focada nas áreas de tecnologia, engenharia, negócios e liderança. Portanto, focaremos essa análise na indústria de Ensino Superior no Brasil.

Principais competidores: dentre os competidores diretos, podemos citar instituições de Ensino Superior públicas e privadas que oferecem cursos em tecnologia/engenharia - exemplos no Estado de São Paulo são a USP (Universidade de São Paulo), Unicamp (Universidade de Campinas), Insper (Instituto de Ensino e Pesquisa), ITA (Instituto Tecnológico de Aeronáutica) e FIAP (Faculdade de Informática e Administração). Indiretamente, podemos citar também cursos livres e bootcamps, principalmente no caso de alunos que já possuem uma formação e querem se requalificar.

Modelo de negócio: o Inteli oferece cursos de graduação, tendo sua receita principal vinda do pagamento de mensalidades pelos estudantes e seus responsáveis, além de doações de bolsas, e também das taxas de inscrição do vestibular. Seus custos/despesas incluem o de construção e manutenção da infraestrutura física e digital de ensino, e da folha de pagamento do corpo docente e demais funcionários. Um fator essencial para a saúde do negócio é o contínuo interesse de novos candidatos, além da retenção dos alunos existentes.

Tendências de mercado: o mercado de Ensino Superior no Brasil vem crescendo nas últimas décadas, principalmente com o crescimento de grandes grupos educacionais privados, muitos com fins lucrativos, que também aumentam a concentração no mercado. Uma das tendências deste mercado é a oferta de cursos no formato híbrido e virtual, com a expansão de pólos EAD pelo país. Em termos de ensino em tecnologia, também observa-se o surgimento de novos cursos de graduação e pós-graduação, em áreas como Data Science e Big Data/AI, que não existiam anos atrás. Algumas instituições, como o Inteli, tem também começado a adotar formatos atualizados de ensino, como o PBL (Problem-based Learning).

### 1.1.1 Partes Interessadas 
Descreva os principais stakeholders envolvidos no projeto e seus papéis.

**1. Alunos**:

Os alunos são os principais beneficiários do projeto. Eles buscam adquirir conhecimentos, habilidades e experiências por meio da métodologia de ensino oferecida pelo Inteli.

**2. Escritório de Projetos**:

A equipe do Escritório de Projetos do Inteli é responsável por planejar, desenvolver e implementar os projetos que serão desenvolvidos em cada módulo do curso.

### 1.1.2 Análise da Indústria
**As 5 Forças de Porter**

As 5 Forças de Porter é o nome dado para um modelo criado por Michael Porter visando entender as forças do mercado que influenciam no desempenho de uma empresa. A seguir, uma análise do Inteli (Instituto de Tecnologia e Liderança) seguindo o modelo de Porter:

**Rivalidade entre os concorrentes existentes**:

O Inteli surge em um mercado educacional já existente, competindo com universidades tradicionais, cursos online de tecnologia e outras instituições inovadoras. A USP (Universidade de São Paulo), Insper (Instituto de Ensino e Pesquisa) e ITA (Instituto Tecnológico de Aeronáutica), são alguns dos seus concorrentes. A competição é baseada principalmente em relação ao nome da faculdade para o mercado de trabalho, qualidade do ensino e mensalidade. No entanto, o Inteli se diferencia ao oferecer uma abordagem única de ensino baseado em projetos, integrando competências comportamentais e negócios com a tecnologia. Isso lhe confere uma vantagem competitiva, pois a abordagem diferenciada pode atrair alunos em busca de uma formação mais abrangente e prática.

**Ameaça de novos entrantes**:

Embora o mercado educacional possa ser acessível a novos entrantes, a presença da família Esteves e o apoio do banco BTG Pactual conferem ao Inteli uma base sólida, tendo em vista a reputação e os recursos financeiros desses e outros patrocinadores. Além disso, a proposta de valor única do Inteli, com foco em projetos e competências multidisciplinares, também pode dificultar a entrada de novos concorrentes diretos.

**Ameaça de produtos ou serviços substitutos**:

Considerando o foco do Inteli na formação de líderes em tecnologia com habilidades de negócios e competências comportamentais, a ameaça de substitutos diretos é relativamente baixa. No entanto, a rápida evolução da educação online e outras formas de aprendizado contínuo podem tornar-se substitutos indiretos. Sendo assim, o Inteli deve sempre inovar e aumentar suas ofertas de serviços educacionais para estas mudanças no mercado.

**Poder de barganha dos fornecedores**:

Os fornecedores do Inteli incluem professores, orientadores, psicopedagogos, especialistas em tecnologia, profissionais de negócios que contribuirão para a instrução e desenvolvimento dos alunos, entre outros. Dado o alto nível de especialização necessário, esses fornecedores podem ter um certo poder de barganha. No entanto, a proposta e os recursos do Inteli podem atrair talentos qualificados e tornar mais acessível o poder de barganha dos fornecedores.

**Poder de barganha dos compradores (alunos)**:

O poder de barganha dos alunos pode variar, uma vez que dispõem de várias alternativas educacionais à escolha. No entanto, o Inteli apresenta uma proposta de valor singular, destacando competências tangíveis e traços comportamentais, juntamente com a criação de laços no mercado, interagindo com diversas empresas ao longo de cada módulo até a graduação. Isso pode reduzir o poder de barganha dos alunos que buscam uma formação mais abrangente e alinhada com as demandas do setor. Importante mencionar que o Inteli oferece um amplo leque de bolsas de estudo destinadas a estudantes que enfrentam restrições financeiras para custear mensalidades, alojamento, alimentação, entre outros.

## 1.2 Problema

Descreva o problema ou a oportunidade de negócio.

### 1.2.1 Análise do Problema

O problema apresentado pelo Inteli, reside na ausência de uma plataforma eficaz para a gestão de parcerias entre empresas e estudantes em projetos conjuntos baseados no modelo de Aprendizagem Baseada em Problemas (PBL). Atualmente, a organização, acompanhamento e distribuição de projetos propostos aos módulos abertos no trimestre são feitas de forma manual, utilizando planilhas no Excel. Esse processo se tornou inadequado devido à diversidade de matérias e ao aumento no número de turmas em aberto.

### 1.2.2 Análise do cenário: Matriz SWOT

![image](https://github.com/2023M5T06-Inteli/Grupo-03/assets/99493861/df061f0f-5355-4645-96fb-7427d3b11a0e)


## 1.3 Descritivo da Solução

Descrição da solução a ser desenvolvida (o que é, quais as principais funcionalidades, como usar). Caso ainda não esteja definida a solução na Sprint 1, o faça assim que possível.

### 1.3.1 Objetivos

Descreva os objetivos do projeto, organizando em objetivos gerais e objetivos específicos.

### 1.3.2 Proposta de Valor: Value Proposition Canvas

Apresenta o Canvas de Proposta de Valor com relação à solução.

### 1.3.3  Matriz de Risco

Apresenta a matriz de risco com relação ao projeto.

## 1.4 Proposta Tecnológica e Benefícios

Descreva a proposta tecnológica baseada em nuvem que será adotada no projeto.

### 1.4.1 Tipo de arquitetura de nuvem escolhida

Descreva o tipo de arquitetura de nuvem escolhida e sua justificativa.

### 1.4.2 Arquitetura de nuvem escolhida

Descreva como a arquitetura de nuvem escolhida deverá ser utilizada.

### 1.4.3 Benefícios trazidos pela arquitetura de nuvem proposta

Descreva os benefícios trazidos pela arquitetura de nuvem proposta.

# 2. Entendimento da Experiência do Usuário

Inclua nesta seção os perfis de usuário e respectivas personas, e o mapa de jornada de usuário.

## 2.1. Perfis de Usuários 

Descreva instruções detalhadas sobre o uso de cada opção e recursos relacionados ao perfil de cada usuário, garantindo uma experiência fácil e intuitiva para o usuário final. 

### 2.1.1 Personas

Descreva exemplos de Personas que representam as partes reais interessadas no desenvolvimento, no resultado e/ou nas decisões tomadas a partir do sistema desenvolvido. Caracterize-as a partir de dores, necessidades e comportamentos específicos em relação ao problema que o projeto busca resolver.

## 2.2 Mapa de Jornada do Usuário

Associe ao perfil de cada usuário um mapa de jornada que é uma representação visual da experiência do usuário desde o início até o fim da interação com o produto ou serviço. Inserir o link com o artefato desenvolvido.

## 2.3 Wireframes

Descreva as telas de baixa fidelidade das áreas do usuário, de forma conectada, demonstrando a diagramação e o fluxo de navegação.
Exemplos: tela da home, tela de login, etc. Em cada tela colocar: cabeçalho, rodapé, barra lateral, área de conteúdo
Aqui você deve colocar o link para o wireframe ou colocar as imagens geradas na sequência correta do fluxo de navegação.
Além disso: forneça exemplos de como as funcionalidades do software são acessadas e usadas pelos usuários, incluindo informações sobre os passos necessários para realizar tarefas específicas; aborde as principais preocupações de UX, como acessibilidade, usabilidade, consistência e simplicidade; e apresente exemplos de como as telas foram pensadas para atender às necessidades dos usuários com diferentes tipos de habilidades e recursos.

# 3. Requisitos
Um requisito é uma especificação que define as necessidades e condições que o sistema deve atender. 

## 3.1 Requisitos Funcionais

Requisitos Funcionais são todos os problemas e necessidades que devem ser atendidos e resolvidos pelo software por meio de funções ou serviços. Para esta análise inicial, trouxemos 3 requisitos, sendo eles: 

**RF01. Análise de Compatibilidade dos Projetos**

**Descrição**: assegurar a compatibilidade entre os projetos propostos pelas empresas e os módulos abertos, considerando tanto as competências necessárias para os projetos quanto as disciplinas disponíveis. Isso possibilita uma otimização aprimorada, garantindo que os projetos empresariais estejam alinhados com as competências existentes no sistema, aumentando assim a eficácia e o sucesso dos projetos.

**Informações**:

-A análise é realizada para garantir a compatibilidade entre projetos empresariais e módulos abertos.

-São consideradas as competências exigidas pelos projetos e as disciplinas disponíveis no sistema.

**Aplicação**:

-Um projeto proposto por uma empresa para modelo preditivo com programação em Python e análise de dados.

-A análise de compatibilidade identifica as disciplinas relacionadas a Python e análise de dados na página do EP.

-Caso haja uma correspondência satisfatória entre as competências e as disciplinas disponíveis, o projeto é considerado compatível. Para isso, podemos desenvolver uma integração com o chat GPT na parte de IA para corresponder uma proposta de projeto com um módulo em aberto. Isso pode ser visualizado no formato de dashboard dentro da plataforma.

**RF02. Abertura de Módulos no Trimestre/Semestre**

**Descrição**: divulgação de informações referentes aos módulos disponíveis no trimestre/semestre. Essas informações incluem detalhes sobre os tópicos que serão abordados e estudados pelos alunos ao longo do período.

**Informações**:

-O sistema deve fornecer informações sobre os módulos disponíveis no trimestre/semestre.

-As informações devem abranger os assuntos que serão ensinados durante o período.

**Aplicação**:

-No início do semestre, as empresas acessam o sistema para obter informações sobre os módulos oferecidos que estão disponiveis para realização de projeto.

-Cada módulo listado apresenta uma descrição detalhada dos tópicos que serão abordados.

-As empresas podem tomar decisões com base nessas informações, selecionando módulos que se alinhem com seus interesses e objetivos.

**RF03. Cadastro de Usuários**

**Descrição**: capacidade de cadastrar e autenticar usuários na plataforma. Os usuários que podem ser cadastrados são os administradores responsáveis pelo gerenciamento da plataforma.

**Informações**:

-A plataforma deve permitir o cadastro de usuários.

-A autenticação é necessária para garantir acesso seguro aos recursos da plataforma.

-Cada usuário cadastrado deve fornecer informações como nome, endereço de e-mail e senha.

-A autenticação deve ser baseada em credenciais seguras para garantir a integridade dos dados (exemplo: e-mail com "nome.sobrenome@inteli.edu.br".

**Aplicação**:

-Um administrador do inteli acessa a plataforma e clica na opção de cadastro.

-Ele preenche os campos obrigatórios, como seu nome, endereço de e-mail e senha escolhida.

-Após o cadastro, o administrador pode fazer o login usando suas credenciais recém-criadas.

### 3.1.1 Casos de Uso

O diagrama de caso de uso é uma ferramenta para a engenharia de requisitos e análise de sistemas, servindo para demonstrar de uma forma mais visual a interação entre os usuários e o sistema em desenvolvimento. Com a utilização de diagramas comportamentais permite uma maior compreensão dos requisitos e definição do escopo. 

Para melhor compreensão das interações presente no sistema, definimos dois fluxos: EP (escritório de projetos) e OI (organização interessada) que possuem as principais funcionalidades no sistema, listadas abaixo.
<img src="../imagens/caso_de_uso.png">


### 3.1.2 User Stories

Cada caso de uso descrito no item acima deverá ser detalhado no formato de User Story seguindo o formato abaixo:

Como PERFIL, DEVO/POSSO AÇÃO para OBJETIVO
PERFIL: perfil do usuário que realizará a ação
DEVO/POSSO: obrigatoriedade da ação
AÇÃO: o que será realizado
OBJETIVO: qual a finalidade da ação.

Exemplo:

    Eu, como analista de projetos, devo cadastrar um novo módulo de curso para uma disciplina para realizar a gestão e controle dos entregáveis.


## 3.2 Requisitos não funcionais

Os requistos não funcionais definem características e qualidades do sistemas, abordando aspectos como usabilidade, desempenho ou escalabilidade. Para esta análise inicial, trouxemos 3 requisitos, sendo eles: 


# 4.	Arquitetura do Sistema

Descreva a arquitetura da sua solução. A arquitetura de um sistema de software é uma descrição abrangente da estrutura e organização de uma solução tecnológica (software e hardware), incluindo seus componentes, relacionamentos, interfaces, padrões de comunicação e fluxo de dados. Ela fornece uma visão de alto nível da solução e define a maneira como os diferentes elementos se conectam e interagem para atender aos requisitos do sistema.

## 4.1.	Diagrama de Arquitetura

Atualizar a cada revisão/atualização da arquitetura, mantendo todas as versões no documento.

<img src="../imagens/diagrama-arquitetura.png"> 
Exemplo de Diagrama de Arquitetura

## 4.2.	Diagrama de Implantação

Crie um diagrama de implantação do projeto com a solução proposta. O diagrama deverá descrever onde os módulos do sistema estarão implantados e os protocolos de comunicação utilizados entre eles. Inclua uma descrição textual completa do diagrama, e que mostra como requisitos não funcionais são suportados.

### 4.2.1.	Componentes que compões a solução

Descreva abaixo as tecnologias e ferramentas utilizadas para o desenvolvimento da solução

### 4.2.2.	Procedimentos de implantação da solução
	
Descreva abaixo o passo a passo para realizar a implantação da solução projetada em nuvem.

## 4.3.	Diagrama de Sequência

Crie diagramas de sequência UML mostrando a integração entre frontend e backend. Descreva as sequências de diagramas encadeando explicações que relacionam a sequência apresentada. Isso serve para contextualizar a leitura pela parte interessada.
 
# 5.	Projeto e Implementação UX e UI 

Descreva informações solicitadas no projeto sobre o design e a funcionalidade da aplicação ou sistema em questão. Ela fornece informações sobre como o software é projetado para ser fácil de usar e intuitivo para os usuários. Nesta seção, deve ser possível encontrar descrições detalhadas sobre as principais características e recursos da interface do usuário, como botões, menus, ícones e outros elementos que são utilizados para facilitar a interação do usuário com o software. 
Além disso: forneça exemplos de como as funcionalidades do software são acessadas e usadas pelos usuários, incluindo informações sobre os passos necessários para realizar tarefas específicas; aborde as principais preocupações de UX, como acessibilidade, usabilidade, consistência e simplicidade; e apresente exemplos de como o software foi projetado para atender às necessidades dos usuários com diferentes tipos de habilidades e recursos.
Organize a apresentação dessas informações no que foi pensado inicialmente durante o desenho do wireframe e, na sequência, o que foi desenvolvido no Frontend.

## 5.1.	Frontend

Descreva as telas desenvolvidas, de forma conectada, demonstrando o fluxo de navegação e observações sobre a implementação (verifique o que foi solicitado no artefato de entrega do projeto). Inclua qualquer informação que julgar relevante, como por exemplo, alterações necessárias de mudança da implementação em relação ao protótipo de baixa fidelidade. 

# 6.	Projeto de Banco de Dados

Descreva os modelos conceituais e lógicos propostos para a definição do Banco de Dados.

## 6.1.	Modelo Conceitual

Descreva o modelo conceitual que representa em alto nível os conceitos que suportam o negócio da organização parceira com foco no escopo do projeto. Utilize os 4 tipos de elementos para representar a realidade, que são: conceitos, atributos, identificações e associações.

Pode utilizar o Modelo Entidade-Relacionamento - MER para representar modelos conceituais. As estruturas utilizadas são: entidades e tipos de entidades, atributos e tipos de atributos e relacionamentos e tipos de relacionamentos.

## 6.2.	Modelo Lógico 

Descreva o modelo lógico de dados que é uma representação abstrata e simplificada dos dados armazenados no sistema. Inclua quaisquer explicações que julgar necessárias para descrever como os dados são relacionados e para como foi realizada a garantia da integridade e a consistência dos dados armazenados. 

Inclua uma descrição detalhada das tabelas, campos e relações presentes no modelo lógico de banco de dados. Apresente também as regras de negócio e as restrições aplicadas aos dados para garantir a integridade e a consistência dos dados armazenados.
 
# 7.	Testes de Software

Descreva os testes solicitados pelo desenvolvimento do projeto.
Separe cada tipo de teste em uma subseção. Encadeie a sequência de testes solicitados com seus achados. O que vocês foram verificando, aprendendo e melhorando a cada teste realizado?

Inclua uma explicação de apresentação do que foi realizado e o link (para vídeo ou github) ou imagem da tabela com dados organizados dos testes realizados. Garanta que as informações estão claras. Inclua qualquer informação explicativa que julgar relevante.

# 8.	Documentação da API

Apresentar a documentação no formato Swagger ou aplicação equivalente com todas as requisições dos endpoints desenvolvidos e funcionando.
 
# Referências

Toda referência citada no texto deverá constar nessa seção, utilizando o padrão de normalização da ABNT - ABNT NBR 10520. As citações devem ser confiáveis e relevantes para o trabalho. São imprescindíveis as citações dos sites de download das ferramentas utilizadas, bem como a citação de algum objeto, música, textura ou outros que não tenham sido produzidos pelo grupo, mas utilizados (mesmo no caso de licenças gratuitas, royalty free ou similares)
Sugerimos o uso do sistema autor-data para citações.

# Apêndice 
Os apêndices representam informações adicionais que não caberiam no documento exposto acima, mas que são importantes por alguma razão específica do projeto. 

## 📝 Descrição

Curta descrição sobre o que o seu projeto faz (problema a ser resolvido e solução proposta - máx. 250 palavras - deve conter link para vídeo de demonstração - pode conter imagens).

## Documentação

Os arquivos da documentação deste projeto estão na pasta [documentos/index.md](documentos/index.md), e o seu conteúdo é publicado via GitHub Pages.


## 📝 LINKS

Clique <a href="https://www.linkedin.com/in/victorbarq/">AQUI</a> para acessar a plataforma de consolidação dos dados.

<a href="https://www.linkedin.com/in/victorbarq/">Link para o Manual de Instruções</a> que explica como montar, conectar e utilizar o protótipo.

<a href="https://www.linkedin.com/in/victorbarq/">Link para a documentação geral</a> do projeto.

## 📁 Estrutura de pastas

```
Alunos inteli (remover essa observação do readme.md após leitura e execução):

Supondo que você é da Turma 4 e Projeto 5, substitua:

T(NUMERO_DA_TURMA)_G(NUMERO_DO_GRUPO)_V(VERSÃO)_document.pdf
por
T6_G1_V01_document.pdf

Faça o mesmo para a documentação em formato DOCX, se houver.
```

|--> documentos<br>
  &emsp;| --> outros <br>
  &emsp;| T6_G3_V1_document.pdf<br>
  &emsp;| T6_G3_V1_document.docx<br>
|--> imagens<br>
|--> src<br>
  &emsp;|--> Back-end<br>
  &emsp;|--> Front-end<br>
| readme.md<br>
| license.txt

Dentre os arquivos presentes na raiz do projeto, definem-se:

- <b>readme.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

- <b>documentos</b>: aqui estarão todos os documentos do projeto. Há também uma pasta denominada <b>outros</b> onde podem estar presentes documentos complementares à documentação principal.

- <b>imagens</b>: imagens relacionadas ao projeto como um todo (por exemplo imagens do sistema, do grupo, logotipos e afins).

- <b>src</b>: nesta pasta encontra-se todo o código fonte do sistema (circuito e eventuais sistemas complementares).

## 💻 Configuração para desenvolvimento

```
Alunos inteli (remover essa observação do readme.md após leitura e execução):

Oriente o usuário a configurar passo-a-passo o Ubidots, para que ele reproduza a experiência completa com o protótipo coletando dados. Vocês podem optar por colocar instruções no próprio Manual de Instruções, e neste caso, pode remover esta seção completamente.
```

Aqui encontram-se todas as instruções necessárias para a configuração do sistema

1. passo 1
2. passo 2
3. passo 3

## 🗃 Histórico de lançamentos

* 0.2.1 - 25/01/2022
    * Atualização de documentos (código do módulo permanece inalterado).
* 0.2.0 - 15/01/2022
    * Remove `setDefaultXYZ()`
    * Adiciona `init()`
* 0.1.1 - 11/01/2022
    * Crash quando chama `baz()`
* 0.1.0 - 10/01/2022
    * O primeiro lançamento adequado
    * Renomeia `foo()` para `bar()`
* 0.0.1 - 01/01/2022
    * Trabalho em andamento

## 📋 Licença/License
```
Alunos inteli (remover essa observação do readme.md após leitura e execução, junto com o link para o tutorial):

1. Siga o tutorial para criação da licença: 
```
<a href="https://drive.google.com/file/d/1hXWLHUhjBkPVuGqeE2LZKozFntnJZzlx/view">Tutorial</a>

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Intelihub/Template_M4/">MODELO GIT INTELI</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.yggbrasil.com.br/vr">Inteli, Luis Miranda, Mauricio Felicissimo, Eduarda Gonzaga, João Montagna, Renan Ribeiro, Yuri Toledo</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>
