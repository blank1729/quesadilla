package handler

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Data struct {
	err      bool
	category string
	joketype string
	Joke     string
	flags    struct {
		p1 bool
		p2 bool
		p3 bool
		p4 bool
		p5 bool
		p6 bool
	}
	id   int
	safe bool
	lang string
}

func Handler(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get("https://v2.jokeapi.dev/joke/Any")
	if err != nil {
		fmt.Println("Error is req: ", err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body) // response body is []byte
	// fmt.Println(string(body))
	data := string(body)
	var payload Data
	err = json.Unmarshal([]byte(data), &payload)
	if err != nil {

	}
	// fmt.Println("this is me testing 1,2,3")
	fmt.Printf("Joke: %s\n", payload.Joke)
	fmt.Fprintf(w, payload.Joke)
}
