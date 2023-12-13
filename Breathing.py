import time
import subprocess

file = '/System/Library/Sounds/Purr.aiff'
afplay = subprocess.Popen(['afplay', file])

sec = int(input("Enter the number of seconds for each inhale/exhale: "))
rnd = int(input("Enter the number of intervals: "))

def print_count(sec):
	afplay = subprocess.Popen(['afplay', file])
	for i in range(sec, 0, -1):
		print(f"\r{i}", end="")
		time.sleep(1)
	
	if afplay is not None:
		afplay = subprocess.Popen(['afplay', file])
		for i in range(0, sec, +1):
			print(f"\r{i}", end="")
			time.sleep(1)

print("Begin balanced rhythmic breathing program.")
for i in range(rnd):
	print_count(sec)
print("\nEnd of program.")