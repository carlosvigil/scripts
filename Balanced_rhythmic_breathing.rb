#! /usr/bin/env ruby
$file = '/System/Library/Sounds/Purr.aiff'
$afplay = lambda { system ("afplay #{$file}") }

$afplay.call
puts "Enter the number of seconds for each inhale/exhale:"
sec = gets.chomp.to_i
puts "Enter the number of intervals:"
intv = gets.chomp.to_i

def print_count(sec)
	Thread.new { $afplay.call }
	1.upto(sec) do |i|
		print "\r#{i}"
		sleep 1
	end
	
	Thread.new { $afplay.call }
	sec.downto(1) do |i|
		print "\r#{i}"
		sleep 1
	end
end


puts "Begin balanced rhythmic breathing program."
intv.times do
	print_count(sec)
end
puts "\nEnd of program."
