package main

import (
	"fmt"
	"os/exec"
	"time"
)

func handleError(err error) {
	if err != nil {
		fmt.Println(err)
	}
}

func playSound() *exec.Cmd {
	cmd := exec.Command("afplay", "/System/Library/Sounds/Purr.aiff")
	err := cmd.Start()
	handleError(err)
	return cmd
}

func getTiming() (int, int) {
	// Get user input for time in seconds and the number of intervals
	var sec, intv int
	fmt.Println("Enter the time in seconds for each breath:")
	fmt.Scanf("%d", &sec)
	fmt.Println("Enter the number of intervals you want to complete (Enter or 0 for manual exit):")
	fmt.Scanf("%d", &intv)
	return sec, intv
}

func main() {
	cmd := playSound().Start()
	handleError(cmd)
	sec, intv := getTiming()

	// Create a timer that ticks for n seconds
	ticker := time.NewTicker(time.Duration(sec) * time.Second)
	defer ticker.Stop()

	for i := 1; i <= intv*2; i++ {
		select {
		case t := <-ticker.C:
			playSound()
			if i%2 == 1 {
				fmt.Printf("Tick at %v, %d intervals remaining\n", t, intv-i/2+1)
			}
		}
	}

	fmt.Println("Stopped")
}
