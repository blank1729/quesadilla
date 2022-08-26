package handler

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get("https://v2.jokeapi.dev/joke/Any")
	if err != nil {
		fmt.Println("Error is req: ", err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body) // response body is []byte
	fmt.Println(string(body))
	fmt.Fprintf(w, string(body))
}
