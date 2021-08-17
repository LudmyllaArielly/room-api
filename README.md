# Room Api
*Aplicação de gerenciamento de salas de reuniões construído com bootcamp Santander, no qual produzimos o backend e frontend do projeto*

## Tecnologias usadas
- Spring framework
  - Spring web
  - Spring Data Jpa
  - Swagger
  - Lombok
  - Maven
  - Java Web

## Passos para configuração

**1. Clone a aplicação**

```bash
git clone https://github.com/LudmyllaArielly/room-api.git
```
**2. Execute o aplicativo usando maven**

```bash
mvn room-api:run
```
**3. Pré-requisitos**
```bash
mvn --version
```
Veja a indicação da versão do maven instalada, bem como a versão do JDK, entre outras. Esses requisitos são obrigátorios, portanto é necessário definir corretamento as variáveis de ambiente JAVA_HOME, M2_HOME

&nbsp;O aplicativo começará a ser executado em: <http://localhost:8080>

**4. Compila**

```bash
mvn compile
```
Este comando compila o projeto e deposita os resultados no diretório de destino.

**5. Executando a Rest Api**

```bash
java -jar target/api.jar
or
mvn room-api:run
```
Neste caminho A Api foi geradada pelo pacote mvn package -P e esta sendo executada na porta 8080.

&nbsp;Exemplo de endereço:http://localhost:8080/rooms

&nbsp;Exemplo de endereço com swagger:http://localhost:8080/swagger-ui.html#/


## Exemplo de corpo de solicitações válidas

##### Cria sala
```json
{
	"name": "Curso de Java com Spring framework",
	"date": "2021-08-17",
	"startHour": "14:00:00",
	"endHour": "15:00:00"
}
```

# Room APP
Esse projeto foi gerado com Angular CLI version 12.

### Servidor de desenvolvimento
Execute ng serve para startar o servidor. Navegue até http://localhost:4200/. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

### Gerando componentes
Execute ng generate component component-name para gerar um novo componente. Você também pode usar ng generate directive|pipe|service|class|guard|interface|enum|module.

### Build
Execute ng build para fazer o build do projeto.Os artefatos de construção serão armazenados no diretório dist /. Use o sinalizador --prod para uma construção de produção.

### Clone o repositório
```
git clone https://github.com/LudmyllaArielly/room-api.git
cd room-app
```

### Servidor da aplicação

Nosso servidor de aplicativos backend é um aplicativo NodeJS que depende de alguns pacotes npm de terceiros. Você precisa instalar estes:

* Instale as dependências locais (da pasta raiz do projeto):
    ```
    cd server
    npm install
    cd ..
    ```

  (Isso instalará as dependências declaradas no arquivo server / package.json)
  
### Execute a aplicação

- Se você tiver i yarn instalado
 - yarn start
- Npm
 - npm start
- Ng
 - ng serve





