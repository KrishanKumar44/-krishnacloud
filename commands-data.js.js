const interviewQuestions = [
    // === 1. FILE & DIRECTORY OPERATIONS (1-15) ===
    {
        id: 1,
        tag: "Linux",
        question: "Q1. What is Soft Link?",
        answer: "Soft Link (Symbolic Link) is a shortcut to another file or directory. If the original file is deleted, the Soft Link becomes broken.",
        command: "ln -s source_file softlink",
        example: "Apache and Nginx use symbolic links for website configuration.",
        followUp: ["What is a Hard Link?", "What is an Inode?"]
    },
    {
        id: 2,
        tag: "Linux",
        question: "Q2. What is an Inode in Linux?",
        answer: "An Inode (Index Node) is a data structure on a Linux file system that stores all metadata about a file except its name and actual content.",
        command: "ls -i filename",
        example: "Troubleshooting a server that says 'No space left on device' when df -h shows plenty of disk space (out of inodes).",
        followUp: ["Can two files have the same inode number?", "How to find total available inodes?"]
    },
    {
        id: 3,
        tag: "Linux",
        question: "Q3. How do you create a directory and all its parent directories at once?",
        answer: "The 'mkdir' command with the '-p' flag automatically creates parent directories if they do not already exist.",
        command: "mkdir -p /var/www/html/app/assets",
        example: "Setting up a deployment script that requires a deep nested directory structure to be present.",
        followUp: ["How to set permissions while creating a directory?", "What does mkdir -v do?"]
    },
    {
        id: 4,
        tag: "Linux",
        question: "Q4. How do you copy a directory along with all its contents?",
        answer: "The 'cp' command requires the '-r' (recursive) flag to copy directories and their underlying files or subdirectories.",
        command: "cp -r /source/directory /destination/directory",
        example: "Backing up a configuration folder before modifying configuration files.",
        followUp: ["How to preserve file attributes during copy?", "What is the difference between cp -r and cp -a?"]
    },
    {
        id: 5,
        tag: "Linux",
        question: "Q5. How to delete a directory containing files safely and forcefully?",
        answer: "The 'rm' command with '-rf' recursively and forcefully deletes files and directories without prompting for confirmation.",
        command: "rm -rf /tmp/old_cache",
        example: "Clearing out ancient build artifacts or temporary data in a CI/CD pipeline script.",
        followUp: ["Why is running 'rm -rf /' dangerous?", "How to delete files interactively?"]
    },
    {
        id: 6,
        tag: "Linux",
        question: "Q6. How do you view hidden files in a directory?",
        answer: "Hidden files in Linux start with a dot (.). The 'ls' command requires the '-a' flag to list all files, including hidden ones.",
        command: "ls -la",
        example: "Checking for configuration files like .bashrc or .env inside a user's home directory.",
        followUp: ["What does the -l flag stand for in ls?", "How to sort ls output by file size?"]
    },
    {
        id: 7,
        tag: "Linux",
        question: "Q7. How to find the absolute path of the current working directory?",
        answer: "The 'pwd' (print working directory) command prints the full absolute path from the root directory (/) to the current directory.",
        command: "pwd",
        example: "Verifying your current location before executing a destructive shell script.",
        followUp: ["Is pwd a shell builtin or an external binary?", "How to resolve symbolic links using pwd?"]
    },
    {
        id: 8,
        tag: "Linux",
        question: "Q8. How to create an empty file or update its timestamp?",
        answer: "The 'touch' command creates a brand new blank file if it doesn't exist, or updates the modification time if it does.",
        command: "touch index.php",
        example: "Creating a placeholder log file or signaling a script to run by touching a trigger file.",
        followUp: ["How to change only the access time of a file?", "Can touch change the timestamp to a specific historical date?"]
    },
    {
        id: 9,
        tag: "Linux",
        question: "Q9. How to view file contents page by page?",
        answer: "The 'less' command opens file contents in a scrollable view, allowing navigation both forward and backward without loading the entire file into memory.",
        command: "less /var/log/syslog",
        example: "Reading large log files comfortably without freezing the terminal screen.",
        followUp: ["What is the difference between more and less?", "How do you search for text inside less?"]
    },
    {
        id: 10,
        tag: "Linux",
        question: "Q10. How to display the first 10 lines of a file?",
        answer: "The 'head' command outputs the beginning lines of a file. By default, it shows 10 lines, but this can be customized using the '-n' flag.",
        command: "head -n 15 config.yaml",
        example: "Checking the header or metadata blocks at the very top of a configuration file.",
        followUp: ["What happens if you run head without specifying a file?", "Can head read from standard input?"]
    },
    {
        id: 11,
        tag: "Linux",
        question: "Q11. How to move or rename a file in Linux?",
        answer: "The 'mv' command serves a dual purpose: it moves files/directories to another location or renames them if the path remains the same.",
        command: "mv old_name.txt new_name.txt",
        example: "Renaming a production configuration file during an application deployment update.",
        followUp: ["How to prevent mv from overwriting an existing file?", "What happens if target directory does not exist?"]
    },
    {
        id: 12,
        tag: "Linux",
        question: "Q12. How to count lines, words, and characters in a file?",
        answer: "The 'wc' (word count) command calculates statistics. The '-l' flag counts the number of lines, '-w' counts words, and '-c' bytes.",
        command: "wc -l list_of_users.txt",
        example: "Counting the total number of entries or users stored inside a plain text export file.",
        followUp: ["How to count only characters instead of bytes?", "Can wc process multiple files at once?"]
    },
    {
        id: 13,
        tag: "Linux",
        question: "Q13. How to check the file type of a specific file?",
        answer: "Linux does not rely on file extensions (.txt, .exe) to determine file types. The 'file' command inspects the file header data to tell you what it actually is.",
        command: "file mysterious_blob",
        example: "Checking whether an uploaded file is a true JPEG image or a disguised shell script.",
        followUp: ["What is a magic number in a file system?", "How to see the mime-type of a file?"]
    },
    {
        id: 14,
        tag: "Linux",
        question: "Q14. How to find files based on their names inside a directory?",
        answer: "The 'find' command searches the directory tree recursively based on expressions like name, size, type, or modified time.",
        command: "find /var/www -name '*.html'",
        example: "Locating all HTML assets inside a vast web application directory structure.",
        followUp: ["How to find files by size?", "How to execute a command on every file found?"]
    },
    {
        id: 15,
        tag: "Linux",
        question: "Q15. How to search for files faster using an index database?",
        answer: "The 'locate' command queries a pre-built database index of the file system, making it significantly faster than 'find', though it requires updating.",
        command: "locate nginx.conf",
        example: "Finding where the system-wide configuration file of Nginx is hidden instantly.",
        followUp: ["How do you update the locate database manually?", "Why does locate sometimes fail to find a newly created file?"]
    },

    // === 2. TEXT PROCESSING & SEARCHING (16-30) ===
    {
        id: 16,
        tag: "Linux",
        question: "Q16. How to search for a text pattern inside a file?",
        answer: "The 'grep' command scans files for lines matching a specified text pattern or regular expression.",
        command: "grep -i 'error' /var/log/nginx/error.log",
        example: "Scanning live production error logs to debug why a user's API request failed.",
        followUp: ["What does the -v flag do in grep?", "How to print line numbers matching the pattern?"]
    },
    {
        id: 17,
        tag: "Linux",
        question: "Q17. How to monitor a log file in real-time as it updates?",
        answer: "The 'tail' command with the '-f' (follow) flag appends new data to the terminal output dynamically as the file grows.",
        command: "tail -f /var/log/auth.log",
        example: "Watching authentication attempts in real-time to check if your SSH key configuration is working.",
        followUp: ["What is the difference between tail -f and tail -F?", "How to view the last 50 lines of a file?"]
    },
    {
        id: 18,
        tag: "Linux",
        question: "Q18. How to replace a specific string in a file without opening it?",
        answer: "The 'sed' (stream editor) command performs basic text transformations on an input stream or file efficiently.",
        command: "sed -i 's/localhost/127.0.0.1/g' config.js",
        example: "Automating configuration updates by swapping strings during a bash-based server provisioning setup.",
        followUp: ["What does the -i flag mean in sed?", "What does the 'g' at the end of the sed command do?"]
    },
    {
        id: 19,
        tag: "Linux",
        question: "Q19. How to extract specific columns or fields from a text file?",
        answer: "The 'awk' utility is a powerful pattern scanning and processing language, widely used to extract specific data columns.",
        command: "awk -F':' '{print $1}' /etc/passwd",
        example: "Extracting only the usernames out of the system's colon-delimited user database file.",
        followUp: ["What does the -F flag do in awk?", "What is the default field separator in awk?"]
    },
    {
        id: 20,
        tag: "Linux",
        question: "Q20. How to sort lines of text alphabetically or numerically?",
        answer: "The 'sort' command rearranges the lines of a text file or stream. The '-n' flag forces numerical sorting instead of alphabetical.",
        command: "sort -n item_prices.txt",
        example: "Sorting a messy list of IDs or data fields to bring structure before generating reports.",
        followUp: ["How to sort text in reverse order?", "How to sort based on a specific column?"]
    },
    {
        id: 21,
        tag: "Linux",
        question: "Q21. How to remove duplicate lines from a sorted file?",
        answer: "The 'uniq' command filters out adjacent duplicate lines from a stream. Note: It requires the input text to be pre-sorted.",
        command: "sort raw_ips.txt | uniq",
        example: "Extracting unique visitor IP addresses from a raw application access log stream.",
        followUp: ["How to count how many times a duplicate line appears?", "How to display only the duplicated lines?"]
    },
    {
        id: 22,
        tag: "Linux",
        question: "Q22. How to extract a specific part of a string or column by characters?",
        answer: "The 'cut' command cuts out sections from each line of files or input streams based on delimiters, byte positions, or characters.",
        command: "echo 'abcdef' | cut -c 1-3",
        example: "Slicing fixed-width strings or pulling specific characters from dynamic variables in scripts.",
        followUp: ["How to cut fields using a specific delimiter?", "Can cut handle multi-character delimiters?"]
    },
    {
        id: 23,
        tag: "Linux",
        question: "Q23. How to redirect the output of a command to a file, overwriting its content?",
        answer: "The single greater-than sign '>' redirects standard output to a file. If the file exists, it wipes out previous content completely.",
        command: "echo 'Welcome' > message.txt",
        example: "Writing a fresh initialization configuration text block into a setting file.",
        followUp: ["What happens if the file does not exist?", "How do you redirect error outputs instead?"]
    },
    {
        id: 24,
        tag: "Linux",
        question: "Q24. How to append command output to a file without deleting old data?",
        answer: "The double greater-than sign '>>' redirects standard output and appends it to the very end of the specified target file.",
        command: "echo 'New entry' >> audit.log",
        example: "Appending dynamic execution histories or custom logs into a cumulative system tracking file.",
        followUp: ["How to redirect both stdout and stderr to the same file?", "What is /dev/null?"]
    },
    {
        id: 25,
        tag: "Linux",
        question: "Q25. How to send the output of one command as input to another?",
        answer: "The pipe operator '|' channels the standard output of the left-hand command directly into the standard input of the right-hand command.",
        command: "ps aux | grep nginx",
        example: "Filtering the huge system process list to see only rows that contain the keyword 'nginx'.",
        followUp: ["What is the maximum buffer size of a Linux pipe?", "Can you pipe multiple commands together?"]
    },
    {
        id: 26,
        tag: "Linux",
        question: "Q26. How to view a file's content in reverse line order?",
        answer: "The 'tac' command is the inverse of 'cat'. It displays the last line first, working its way up to the first line.",
        command: "tac daily_report.txt",
        example: "Reading log events from bottom to top when you want to view the most recent records first.",
        followUp: ["Does tac modify the source file?", "What text utility reverses characters inside a single line?"]
    },
    {
        id: 27,
        tag: "Linux",
        question: "Q27. How to translate or delete specific characters from a stream?",
        answer: "The 'tr' command maps, translates, or squeezes characters from standard input. The '-d' flag deletes specified characters.",
        command: "echo 'hello' | tr '[a-z]' '[A-Z]'",
        example: "Converting variable strings to all-uppercase format within automated shell orchestration environments.",
        followUp: ["How to delete all numbers from a string using tr?", "What is character squeezing?"]
    },
    {
        id: 28,
        tag: "Linux",
        question: "Q28. How to compare two files line by line and see differences?",
        answer: "The 'diff' command analyzes two files and outputs a list of lines that do not match, guiding you on how to make them identical.",
        command: "diff config.old.json config.new.json",
        example: "Reviewing code or environment configuration upgrades to verify exactly what changed.",
        followUp: ["What is a unified diff format (-u)?", "How to compare two whole directories?"]
    },
    {
        id: 29,
        tag: "Linux",
        question: "Q29. How to view command output and save it to a file simultaneously?",
        answer: "The 'tee' command reads standard input and writes it to both standard output (screen) and one or more files concurrently.",
        command: "make build | tee build.log",
        example: "Monitoring a long build process interactively while maintaining a persistent log file for auditing.",
        followUp: ["How to make tee append instead of overwrite?", "How to ignore signals in tee?"]
    },
    {
        id: 30,
        tag: "Linux",
        question: "Q30. How to generate a cryptographic checksum hash for a file?",
        answer: "The 'sha256sum' command computes a 256-bit SHA message digest, widely utilized to verify data integrity against corruption or tampering.",
        command: "sha256sum ubuntu.iso",
        example: "Verifying an downloaded ISO file matches the hash published by official maintainers.",
        followUp: ["What is the difference between md5sum and sha256sum?", "How to verify hashes from a saved checksum file?"]
    },

    // === 3. SYSTEM INFORMATION & PERFORMANCE (31-45) ===
    {
        id: 31,
        tag: "Linux",
        question: "Q31. How to check real-time CPU and Memory usage?",
        answer: "The 'top' command provides a live, interactive, dynamic view of active running processes, system CPU states, and volatile memory allocations.",
        command: "top",
        example: "Investigating live production servers to isolate which script or task is triggering a memory leak.",
        followUp: ["What is the difference between top and htop?", "How do you kill a process directly from top?"]
    },
    {
        id: 32,
        tag: "Linux",
        question: "Q32. How to check available and used system memory (RAM)?",
        answer: "The 'free' command lists total, allocated, and free physical RAM and swap memory spaces. The '-m' or '-h' flags make outputs human-readable.",
        command: "free -h",
        example: "Checking if a server has enough available RAM space before booting a resource-heavy database daemon.",
        followUp: ["What is Swap memory?", "Why does Linux show memory as 'buff/cache' even if it's not free?"]
    },
    {
        id: 33,
        tag: "Linux",
        question: "Q33. How to check disk space usage across mounted file systems?",
        answer: "The 'df' (disk free) command displays the amount of available and consumed storage space on all connected storage systems.",
        command: "df -h",
        example: "Diagnosing disk full problems when microservice APIs start failing due to database write blocks.",
        followUp: ["What does the -T flag do in df?", "How to include inode usage metrics in df?"]
    },
    {
        id: 34,
        tag: "Linux",
        question: "Q34. How to find the storage size of a specific directory or file?",
        answer: "The 'du' (disk usage) command estimates file space usage. The '-sh' flag yields a summary total in clean, human-readable formats.",
        command: "du -sh /var/log",
        example: "Isolating which folder inside a user space is hogging all the disk space.",
        followUp: ["How to sort subdirectories by size?", "What does the -a flag do in du?"]
    },
    {
        id: 35,
        tag: "Linux",
        question: "Q35. How to check kernel version and OS architecture info?",
        answer: "The 'uname' command prints detailed system architecture information. The '-a' flag includes the kernel release, hostname, and processor types.",
        command: "uname -a",
        example: "Checking kernel specifications before installing low-level system drivers or monitoring hooks.",
        followUp: ["How to check the OS distribution name specifically?", "What does x86_64 imply in uname?"]
    },
    {
        id: 36,
        tag: "Linux",
        question: "Q36. How to see how long the system has been running?",
        answer: "The 'uptime' command prints a single line showing current time, duration of active run state, active user sessions, and CPU load averages.",
        command: "uptime",
        example: "Checking whether a scheduled automated server reboot took place successfully overnight.",
        followUp: ["What do the three numbers in load average stand for?", "What constitutes a high load average?"]
    },
    {
        id: 37,
        tag: "Linux",
        question: "Q37. How to list all hardware components detected on the PCI bus?",
        answer: "The 'lspci' command details all devices attached to the peripheral component interconnect slots, like graphics card and network chips.",
        command: "lspci",
        example: "Validating whether a dedicated high-end GPU is detected by the motherboard driver layers properly.",
        followUp: ["How to get verbose hardware details?", "What command lists USB devices instead?"]
    },
    {
        id: 38,
        tag: "Linux",
        question: "Q38. How to view system architecture block parameters of the CPU?",
        answer: "The 'lscpu' command parses architecture fields out of system directories to present a clean breakdown of cores, sockets, caches, and hyperthreading.",
        command: "lscpu",
        example: "Assessing virtual core configurations before optimizing heavy multi-threaded application nodes.",
        followUp: ["Where does lscpu fetch its information?", "How to view real-time per-core CPU speed?"]
    },
    {
        id: 39,
        tag: "Linux",
        question: "Q39. How to view historical system reboot and shutdown logs?",
        answer: "The 'last' command looks backward through the system logging file records to reveal tracking logs of logins, reboots, and runlevel switches.",
        command: "last reboot",
        example: "Auditing a machine after an unexpected crash to see exactly when it cycled back online.",
        followUp: ["Which file does the last command read?", "How to see failed login attempts?"]
    },
    {
        id: 40,
        tag: "Linux",
        question: "Q40. How to display kernel ring buffer messages?",
        answer: "The 'dmesg' command prints messages emitted by the kernel, particularly valuable during system boots or hardware connections.",
        command: "dmesg | grep -i error",
        example: "Debugging low-level hardware faults, Out-Of-Memory (OOM) kills, or disk mount breakdowns.",
        followUp: ["How to clear the dmesg buffer log?", "How to follow dmesg logs in real-time?"]
    },
    {
        id: 41,
        tag: "Linux",
        question: "Q41. How to monitor virtual memory statistics dynamically?",
        answer: "The 'vmstat' command reports summary metrics of processes, memory, paging, block I/O, traps, and CPU activities.",
        command: "vmstat 2 5",
        example: "Analyzing system health over intervals to diagnose severe bottleneck contexts.",
        followUp: ["What does the 'si' and 'so' columns indicate in vmstat?", "How to see disk statistics using vmstat?"]
    },
    {
        id: 42,
        tag: "Linux",
        question: "Q42. How to monitor input/output storage performance metrics?",
        answer: "The 'iostat' utility monitors system storage device loading by tracking active device operational periods relative to average transfer speeds.",
        command: "iostat -xz 1",
        example: "Detecting storage device saturation contexts during deep database index modifications.",
        followUp: ["Which package contains the iostat command?", "What does %util mean in iostat output?"]
    },
    {
        id: 43,
        tag: "Linux",
        question: "Q43. How to show active shell environment variables?",
        answer: "The 'env' or 'printenv' commands output all currently defined global variables passed down to child process terminals.",
        command: "printenv PATH",
        example: "Debugging why an installed application script fails to launch due to missing binary execution paths.",
        followUp: ["How to export a new environment variable?", "What is the difference between local and environment variables?"]
    },
    {
        id: 44,
        tag: "Linux",
        question: "Q44. How to view current system date, time, and timezone status?",
        answer: "The 'timedatectl' command configures and inspects system clock adjustments, network time synchronizations, and active zone bindings.",
        command: "timedatectl status",
        example: "Aligning cloud server clocks to UTC formats to synchronize logging timestamps across clusters.",
        followUp: ["How to change timezones using timedatectl?", "What is NTP?"]
    },
    {
        id: 45,
        tag: "Linux",
        question: "Q45. How to track what system files are being accessed by processes?",
        answer: "The 'lsof' (list open files) command aggregates open streams, file blocks, network links, and active device channels running under active processes.",
        command: "lsof -i :80",
        example: "Finding out exactly which web proxy daemon has locked port 80, blocking another server boot.",
        followUp: ["How to list files opened by a specific user?", "What does lsof +D do?"]
    },

    // === 4. PROCESS MANAGEMENT (46-60) ===
    {
        id: 46,
        tag: "Linux",
        question: "Q46. How to list running processes on the system?",
        answer: "The 'ps' command takes a snapshot of active system routines. 'aux' or '-ef' flags extract complete process lists across all users.",
        command: "ps aux",
        example: "Auditing running binaries to verify if an isolated backup script is still executing background routines.",
        followUp: ["What does the 'Zombie' status mean in a process?", "What is the difference between ps aux and ps -ef?"]
    },
    {
        id: 47,
        tag: "Linux",
        question: "Q47. How to terminate a process using its Process ID (PID)?",
        answer: "The 'kill' command dispatches signals to operational routines. By default, it sends SIGTERM (15), asking it to shut down gracefully.",
        command: "kill 1234",
        example: "Requesting a background service to clean up temporary resources and exit normally.",
        followUp: ["What signal code represents SIGKILL?", "What is the difference between kill -9 and kill -15?"]
    },
    {
        id: 48,
        tag: "Linux",
        question: "Q48. How to kill a process by its name instead of PID?",
        answer: "The 'killall' or 'pkill' commands dispatch shutdown signals to processes matching specified name targets directly.",
        command: "killall nginx",
        example: "Stopping all rogue threads of an unresponsive application instance in one quick sweep.",
        followUp: ["How does pkill differ from killall?", "How to kill processes based on user names?"]
    },
    {
        id: 49,
        tag: "Linux",
        question: "Q49. How to find the process ID of a running program by name?",
        answer: "The 'pgrep' command looks through the active system process table and lists the process IDs matching the selection criteria.",
        command: "pgrep systemd",
        example: "Grabbing a process ID to pipe it directly into custom resource tracking scripts.",
        followUp: ["How to display the process name along with its PID using pgrep?", "What does pgrep -u do?"]
    },
    {
        id: 50,
        tag: "Linux",
        question: "Q50. How to run a command in the background?",
        answer: "Appending an ampersand '&' to the end of a terminal instruction commands the shell to execute it asynchronously within a subshell.",
        command: "tar -czf backup.tar.gz /data &",
        example: "Starting a long compression task while retaining control of the current command prompt.",
        followUp: ["How to view active background jobs?", "How to bring a background job back to the foreground?"]
    },
    {
        id: 51,
        tag: "Linux",
        question: "Q51. How to view active background jobs in the current shell?",
        answer: "The 'jobs' command lists active asynchronous tasks started directly within that specific running terminal session.",
        command: "jobs",
        example: "Checking if a background download or migration task is still running or has stopped.",
        followUp: ["What do the plus (+) and minus (-) signs mean in jobs output?", "How to restart a suspended background job?"]
    },
    {
        id: 52,
        tag: "Linux",
        question: "Q52. How to bring a background job back into the foreground?",
        answer: "The 'fg' command brings a background job or suspended process back to the foreground so you can interact with it.",
        command: "fg %1",
        example: "Resuming an text-editor session (like vim) that was temporarily pushed to the background.",
        followUp: ["What happens if you run fg without arguments?", "How to move a foreground job to the background?"]
    },
    {
        id: 53,
        tag: "Linux",
        question: "Q53. How to keep a process running after closing the terminal?",
        answer: "The 'nohup' (no hangup) command runs an instruction immune to hangups, outputting non-interactive logs to a file.",
        command: "nohup node server.js &",
        example: "Deploying a script via SSH that must continue processing after disconnecting from the remote host.",
        followUp: ["Where does nohup save output by default?", "What is the modern alternative to nohup for process management?"]
    },
    {
        id: 54,
        tag: "Linux",
        question: "Q54. How to alter the scheduling priority of a process upon launch?",
        answer: "The 'nice' command sets the priority level of a process when launching it. Values range from -20 (highest) to 19 (lowest).",
        command: "nice -n 10 tar -czf backup.tar.gz /var/log",
        example: "Running a heavy compression task at a lower priority to prevent it from lagging user-facing web requests.",
        followUp: ["What is the default niceness value of a standard process?", "Who can assign negative niceness values?"]
    },
    {
        id: 55,
        tag: "Linux",
        question: "Q55. How to change the scheduling priority of an already running process?",
        answer: "The 'renice' command alters the scheduling priority of active processes dynamically using their specific PIDs.",
        command: "renice +5 -p 4321",
        example: "Lowering the priority of an active task that is unexpectedly consuming too much CPU.",
        followUp: ["Can non-root users renice a process to a higher priority?", "How to renice all processes belonging to a specific user?"]
    },
    {
        id: 56,
        tag: "Linux",
        question: "Q56. How to measure the exact execution duration of a command?",
        answer: "The 'time' command tracks resource metrics during execution, reporting total real, user, and system time components upon completion.",
        command: "time ./heavy_script.sh",
        example: "Benchmarking the performance of database query operations to identify optimization opportunities.",
        followUp: ["What is the difference between 'real' and 'user' time?", "Is 'time' a shell keyword or a standalone utility?"]
    },
    {
        id: 57,
        tag: "Linux",
        question: "Q57. How to see the hierarchical ancestry tree of active processes?",
        answer: "The 'pstree' command shows running routines as a structural tree graph, clearly mapping relationships between parent and child processes.",
        command: "pstree -p",
        example: "Visualizing a web server setup to see exactly how many worker processes were spawned by the main master daemon.",
        followUp: ["What is the root parent process ID of all user space applications?", "How to highlight a specific process tree branch?"]
    },
    {
        id: 58,
        tag: "Linux",
        question: "Q58. How to continuously execute a command at set intervals?",
        answer: "The 'watch' command repeatedly runs a specified instruction at defined intervals (defaulting to 2 seconds), highlighting changes over time.",
        command: "watch -n 1 df -h",
        example: "Monitoring disk storage consumption in real-time during a large file download or data extraction process.",
        followUp: ["How to highlight differences between successive iterations in watch?", "How to exit the watch screen?"]
    },
    {
        id: 59,
        tag: "Linux",
        question: "Q59. How to send a running process to the background?",
        answer: "Pressing 'Ctrl + Z' suspends a foreground process, after which you can run the 'bg' command to resume its execution in the background.",
        command: "bg %1",
        example: "Moving an unexpectedly slow file copy operation to the background so you can continue using the terminal interface.",
        followUp: ["What signal does Ctrl + Z send to a process?", "How do you check the status of a suspended process?"]
    },
    {
        id: 60,
        tag: "Linux",
        question: "Q60. How to list processes sorted by memory consumption?",
        answer: "While 'top' provides an interactive view, the 'ps' command can explicitly sort and format processes based on memory utilization.",
        command: "ps aux --sort=-%mem | head -n 5",
        example: "Identifying the top 5 memory-hogging applications on a server during a performance audit.",
        followUp: ["How to sort processes by CPU usage instead?", "What do RSS and VSZ mean in ps output?"]
    },

    // === 5. PERMISSIONS & USER MANAGEMENT (61-75) ===
    {
        id: 61,
        tag: "Linux",
        question: "Q61. How do you change file permissions in Linux?",
        answer: "The 'chmod' (change mode) command modifies access permissions using either absolute numeric octal flags or symbolic notation rules.",
        command: "chmod 755 deployment_script.sh",
        example: "Granting read, write, and execute permissions to the file owner while allowing read-only access for others.",
        followUp: ["What does 755 permission mean?", "What is the difference between chmod and chown?"]
    },
    {
        id: 62,
        tag: "Linux",
        question: "Q62. How to change the owner or group of a file?",
        answer: "The 'chown' (change owner) command adjusts the system user and group ownership mappings for target files or directories.",
        command: "chown -R www-data:www-data /var/www/html",
        example: "Changing ownership of a web directory to the web server user so it can read and write files.",
        followUp: ["What does the -R flag do in chown?", "How do you change only the group owner of a file?"]
    },
    {
        id: 63,
        tag: "Linux",
        question: "Q63. How to execute commands with administrative root privileges?",
        answer: "The 'sudo' (superuser do) command allows authorized users to execute commands with administrative permissions, as defined in the sudoers file.",
        command: "sudo apt update",
        example: "Installing security updates or modifying core system configuration files safely.",
        followUp: ["Where is the sudoers configuration file located?", "How to run a persistent root shell session using sudo?"]
    },
    {
        id: 64,
        tag: "Linux",
        question: "Q64. How to switch to another user account during a terminal session?",
        answer: "The 'su' (substitute user) command switches the current shell environment to another user account, requiring that user's password.",
        command: "su - deployuser",
        example: "Switching to a dedicated application deployment user account to test environment variables and permissions.",
        followUp: ["What does the hyphen (-) mean in su -?", "How to switch back to the original user account?"]
    },
    {
        id: 65,
        tag: "Linux",
        question: "Q65. How to add a new user to the system?",
        answer: "The 'useradd' or 'adduser' commands create new user accounts, initialize home directories, and set default shell values.",
        command: "sudo adduser newdeveloper",
        example: "Creating a dedicated login account for a new engineer joining the development team.",
        followUp: ["What is the difference between useradd and adduser?", "Where are user account details stored on the system?"]
    },
    {
        id: 66,
        tag: "Linux",
        question: "Q66. How to delete a user account from the system?",
        answer: "The 'userdel' command removes user accounts. The '-r' flag deletes their associated home directory and mail spool files simultaneously.",
        command: "sudo userdel -r olduser",
        example: "Removing a deactivated employee's account while cleaning up their user files from the server.",
        followUp: ["What happens to files owned by a deleted user?", "How to lock a user account without deleting it?"]
    },
    {
        id: 67,
        tag: "Linux",
        question: "Q67. How to add an existing user to a specific group?",
        answer: "The 'usermod' command modifies user account configurations. The '-aG' flags append the user to supplementary groups safely.",
        command: "sudo usermod -aG docker devuser",
        example: "Adding a developer to the 'docker' group so they can run containers without using 'sudo'.",
        followUp: ["Why is the -a flag critical when using -G?", "How to view all groups a user belongs to?"]
    },
    {
        id: 68,
        tag: "Linux",
        question: "Q68. How to create a new user group on the system?",
        answer: "The 'groupadd' command initializes a new administrative security group mapping within the system databases.",
        command: "sudo groupadd sysadmins",
        example: "Creating a dedicated group to manage shared access permissions for the systems engineering team.",
        followUp: ["Where are group definitions stored?", "How do you delete a group?"]
    },
    {
        id: 69,
        tag: "Linux",
        question: "Q69. How to change a user account password?",
        answer: "The 'passwd' command updates the login authentication password for a user account, enforcing encryption rules.",
        command: "sudo passwd username",
        example: "Resetting a user's password after a temporary lock or initial account setup configuration.",
        followUp: ["How can users change their own passwords?", "How to force a user to change their password on the next login?"]
    },
    {
        id: 70,
        tag: "Linux",
        question: "Q70. How to view your current active username?",
        answer: "The 'whoami' command prints the effective username associated with the current terminal session environment.",
        command: "whoami",
        example: "Verifying your active identity inside a complex automated script before running sensitive operations.",
        followUp: ["What is the difference between 'whoami' and 'id'?", "What command shows all logged-in users?"]
    },
    {
        id: 71,
        tag: "Linux",
        question: "Q71. How to print the current user's UID, GID, and group associations?",
        answer: "The 'id' command outputs precise identity metrics, including the numeric User ID (UID), primary Group ID (GID), and all supplementary groups.",
        command: "id",
        example: "Debugging access permission issues by checking if your account belongs to the required security group.",
        followUp: ["How to check the ID details of a different user?", "What is UID 0 reserved for?"]
    },
    {
        id: 72,
        tag: "Linux",
        question: "Q72. How to set the default file creation permission mask?",
        answer: "The 'umask' command controls the default permissions assigned to newly created files and directories by masking specific bits.",
        command: "umask 022",
        example: "Configuring a secure shell environment where newly created files are readable by everyone but writable only by the owner.",
        followUp: ["What is the default permission for a file before umask is applied?", "How to display umask in symbolic format?"]
    },
    {
        id: 73,
        tag: "Linux",
        question: "Q73. How to change the owner group of a file directly?",
        answer: "The 'chgrp' command changes the group ownership of a file or directory, similar to chown but restricted to group modifications.",
        command: "chgrp developers shared_code.py",
        example: "Updating project files so all members of the development group can collaborate on them.",
        followUp: ["Can non-root users use chgrp?", "How to change group ownership recursively?"]
    },
    {
        id: 74,
        tag: "Linux",
        question: "Q74. How to manage special file attributes on Linux file systems?",
        answer: "The 'chattr' command changes special attributes (like immutability) on ext-based file systems, preventing modification even by root.",
        command: "sudo chattr +i /etc/resolv.conf",
        example: "Locking a critical networking configuration file to prevent automated dhcp scripts from overwriting it.",
        followUp: ["How do you remove the immutable attribute?", "What command lists these special file attributes?"]
    },
    {
        id: 75,
        tag: "Linux",
        question: "Q75. How to view special file system attributes?",
        answer: "The 'lsattr' command lists the special attributes set on files and directories via the chattr command.",
        command: "lsattr critical_file.txt",
        example: "Checking if a file has been set to append-only or immutable mode during a security audit.",
        followUp: ["What does the 'i' attribute indicate in lsattr output?", "Can lsattr check entire directories recursively?"]
    },

    // === 6. NETWORKING & TROUBLESHOOTING (76-90) ===
    {
        id: 76,
        tag: "Linux",
        question: "Q76. How to test network connectivity to a remote host?",
        answer: "The 'ping' command sends ICMP Echo Request packets to a network host to measure round-trip times and check availability.",
        command: "ping -c 4 google.com",
        example: "Checking if your server can reach the internet during an initial networking configuration triage.",
        followUp: ["Why do some servers ignore ping requests?", "How to change the packet interval in ping?"]
    },
    {
        id: 77,
        tag: "Linux",
        question: "Q77. How to download files from the internet using the command line?",
        answer: "The 'wget' command is a non-interactive network downloader that retrieves files from web and FTP servers directly.",
        command: "wget https://example.com/package.tar.gz",
        example: "Downloading software installation tarballs or raw source code directly onto a remote cloud server.",
        followUp: ["How to resume a broken download using wget?", "How to download a file and save it under a different name?"]
    },
    {
        id: 78,
        tag: "Linux",
        question: "Q78. How to transfer data to or from a server using URL syntax?",
        answer: "The 'curl' command is a powerful utility used to transfer data over various network protocols (HTTP, HTTPS, FTP), ideal for API testing.",
        command: "curl -I https://example.com",
        example: "Fetching only the HTTP header responses from a web server to verify if an SSL certificate configuration is active.",
        followUp: ["What does the -L flag do in curl?", "How to send a POST request with data using curl?"]
    },
    {
        id: 79,
        tag: "Linux",
        question: "Q79. How to view all active network interfaces and IP configurations?",
        answer: "The modern 'ip' command manages and inspects routing, devices, policy routing, and tunnels. 'ip addr' displays active IP addresses.",
        command: "ip addr show",
        example: "Identifying the private IP address assigned to a virtual machine network interface card.",
        followUp: ["What is the old, deprecated equivalent of 'ip addr'?", "How to bring a network interface down using the ip command?"]
    },
    {
        id: 80,
        tag: "Linux",
        question: "Q80. How to list all active network connections and listening ports?",
        answer: "The 'ss' command provides detailed statistics on network sockets, serving as a modern, faster replacement for the legacy netstat utility.",
        command: "ss -tulpn",
        example: "Verifying if your web server daemon is successfully listening on port 443 for incoming secure traffic.",
        followUp: ["What do the flags -t, -u, -l, and -p stand for in ss?", "How to view only established connections?"]
    },
    {
        id: 81,
        tag: "Linux",
        question: "Q81. How to trace the network path taken by packets to a remote host?",
        answer: "The 'traceroute' command displays the route packets take to a network host, listing all the intermediate routing hops along the path.",
        command: "traceroute google.com",
        example: "Pinpointing exactly which network router or ISP hop is dropping packets or causing high network latency.",
        followUp: ["What protocol does traceroute use by default on Linux?", "What is the modern, interactive alternative to traceroute?"]
    },
    {
        id: 82,
        tag: "Linux",
        question: "Q82. How to perform DNS lookups and query domain records?",
        answer: "The 'dig' (domain information groper) command queries DNS name servers for detailed record breakdowns (A, MX, TXT, CNAME).",
        command: "dig example.com A",
        example: "Verifying if a newly configured domain name record has propagated across public DNS infrastructures correctly.",
        followUp: ["How to perform a reverse DNS lookup using dig?", "What is the short output format option in dig?"]
    },
    {
        id: 83,
        tag: "Linux",
        question: "Q83. How to copy files securely between different hosts over a network?",
        answer: "The 'scp' (secure copy) command transfers files securely over an encrypted SSH connection between local and remote systems.",
        command: "scp backup.sql user@remotehost:/var/backups/",
        example: "Pushing production database dumps to an offsite secure storage server safely.",
        followUp: ["How to copy an entire directory recursively using scp?", "How to specify a custom SSH port in scp?"]
    },
    {
        id: 84,
        tag: "Linux",
        question: "Q84. How to synchronize files and directories efficiently across systems?",
        answer: "The 'rsync' command syncs data between locations, transferring only the modified portions of files to minimize network overhead.",
        command: "rsync -avz /local/dir/ user@remotehost:/remote/dir/",
        example: "Setting up efficient nightly incremental data replication jobs between primary and backup servers.",
        followUp: ["What do the -a, -v, and -z flags mean in rsync?", "How to delete source files after a successful rsync transfer?"]
    },
    {
        id: 85,
        tag: "Linux",
        question: "Q85. How to connect to and manage a remote server securely?",
        answer: "The 'ssh' (secure shell) command provides secure, encrypted terminal access to remote hosts over unsecured network lines.",
        command: "ssh -i private_key.pem admin@192.168.1.50",
        example: "Logging into a cloud server instance securely using a private key credential to execute administrative tasks.",
        followUp: ["What is the default port for SSH connections?", "How to run a single command on a remote host via SSH without logging into a shell?"]
    },
    {
        id: 86,
        tag: "Linux",
        question: "Q86. How to view the local system routing table?",
        answer: "The 'ip route' command displays and modifies the IP routing table rules that dictate where outgoing network packets are directed.",
        command: "ip route show",
        example: "Checking the default gateway configuration to debug why a server cannot access external websites.",
        followUp: ["How to add a new static route?", "What is a default gateway?"]
    },
    {
        id: 87,
        tag: "Linux",
        question: "Q87. How to monitor network bandwidth usage by process?",
        answer: "The 'nethogs' utility breaks down network traffic bandwith usage in real-time, grouped by individual process PIDs rather than protocol interfaces.",
        command: "sudo nethogs eth0",
        example: "Identifying exactly which application worker thread is consuming all the available network upload speed.",
        followUp: ["Which package contains the nethogs utility?", "What command monitors interface traffic visually instead?"]
    },
    {
        id: 88,
        tag: "Linux",
        question: "Q88. How to test if a specific remote port is open?",
        answer: "The 'nc' (netcat) or 'telnet' commands can open raw TCP or UDP network connections to verify port accessibility.",
        command: "nc -zv 192.168.1.10 3306",
        example: "Testing if a remote database server port (3306) is accessible through existing firewall rules.",
        followUp: ["What do the -z and -v flags mean in netcat?", "How to use netcat to start a simple listening port?"]
    },
    {
        id: 89,
        tag: "Linux",
        question: "Q89. How to capture and analyze network packets directly from the command line?",
        answer: "The 'tcpdump' command intercepts and displays network packets being transmitted or received over a specific interface card.",
        command: "sudo tcpdump -i eth0 port 80",
        example: "Debugging raw HTTP network requests passing through an interface to resolve complex api handshake failures.",
        followUp: ["How to save captured packets to a file for Wireshark analysis?", "What flag disables DNS name resolutions in tcpdump?"]
    },
    {
        id: 90,
        tag: "Linux",
        question: "Q90. How to view system network statistics by protocol?",
        answer: "The 'netstat' command with the '-s' option displays comprehensive, structural packet statistics across IP, TCP, UDP, and ICMP layers.",
        command: "netstat -s",
        example: "Analyzing total packet drops or bad checksum counts to evaluate underlying network connection health.",
        followUp: ["Is netstat considered deprecated in modern Linux distributions?", "What tool is recommended to replace netstat functionality?"]
    },

    // === 7. PACKAGE MANAGEMENT & STORAGE (91-100) ===
    {
        id: 91,
        tag: "Linux",
        question: "Q91. How to update package indexes and install software on Ubuntu/Debian?",
        answer: "The 'apt' package manager automates downloading, configuring, and installing software packages from official repositories.",
        command: "sudo apt update && sudo apt install nginx -y",
        example: "Automating the provisioning of a basic Nginx web server layer during system initializations.",
        followUp: ["What is the difference between apt update and apt upgrade?", "What does the -y flag do?"]
    },
    {
        id: 92,
        tag: "Linux",
        question: "Q92. How to manage software packages on RHEL/CentOS systems?",
        answer: "Modern Red Hat-based distributions utilize 'dnf' (or legacy 'yum') to manage software installations, dependencies, and upgrades.",
        command: "sudo dnf install httpd -y",
        example: "Installing the Apache web server daemon onto an enterprise Red Hat enterprise server stack.",
        followUp: ["What utility replaced yum in modern Red Hat enterprise OS releases?", "How do you remove a package using dnf?"]
    },
    {
        id: 93,
        tag: "Linux",
        question: "Q93. How to create an archive tarball file?",
        answer: "The 'tar' (tape archive) utility groups multiple files into a single consolidated archive file block, often compressing it via gzip.",
        command: "tar -czvf backup.tar.gz /var/www/html",
        example: "Archiving and compressing a website root directory into a single neat file package for storage.",
        followUp: ["What do the flags -c, -z, -v, and -f stand for?", "How to extract a tarball?"]
    },
    {
        id: 94,
        tag: "Linux",
        question: "Q94. How to extract a compressed tarball archive?",
        answer: "The 'tar' utility extracts files out of archives using the '-x' (extract) flag alongside appropriate decompression modifiers.",
        command: "tar -xzvf archive.tar.gz -C /target/dir/",
        example: "Decompressing a deployment package into the target server application directory structure.",
        followUp: ["What does the -C flag do in tar?", "How to list tarball contents without extracting them?"]
    },
    {
        id: 95,
        tag: "Linux",
        question: "Q95. How to view all connected block storage devices?",
        answer: "The 'lsblk' command lists information about all available or connected block storage devices (hard drives, SSDs, partitions).",
        command: "lsblk",
        example: "Verifying whether an unformatted secondary EBS volume cloud storage block has attached to the system.",
        followUp: ["Does lsblk display mount points?", "How to view file system types using lsblk?"]
    },
    {
        id: 96,
        tag: "Linux",
        question: "Q96. How to attach a storage file system partition to a directory path?",
        answer: "The 'mount' command attaches a storage drive or partition layout file system configuration structure to a specific directory path branch.",
        command: "sudo mount /dev/sdb1 /mnt/storage",
        example: "Accessing files stored on an external secondary drive partition by mounting it under the standard /mnt workspace.",
        followUp: ["How to unmount a file system safely?", "Which file dictates permanent system boot mount behaviors?"]
    },
    {
        id: 97,
        tag: "Linux",
        question: "Q97. How to manage system startup services using systemd?",
        answer: "The 'systemctl' command controls the systemd initialization manager engine, starting, stopping, enabling, or checking service statuses.",
        command: "sudo systemctl enable --now docker",
        example: "Configuring the Docker daemon engine to launch automatically whenever the bare-metal server system boots up.",
        followUp: ["What is the difference between starting and enabling a service?", "How to check service logs using journalctl?"]
    },
    {
        id: 98,
        tag: "Linux",
        question: "Q98. How to query unified systemd log files?",
        answer: "The 'journalctl' utility queries the logs generated by the systemd centralized logging daemon framework.",
        command: "journalctl -u nginx.service --no-pager | tail -n 20",
        example: "Reviewing the last 20 runtime output log events generated by an active Nginx web server node.",
        followUp: ["How to follow journalctl logs in real time?", "How to filter journalctl logs by time window?"]
    },
    {
        id: 99,
        tag: "Linux",
        question: "Q99. How to view system memory architecture parameters using free utilities?",
        answer: "The '/proc' virtual directory houses direct low-level kernel abstractions. Reading `/proc/meminfo` outputs detailed architectural RAM statistics directly.",
        command: "cat /proc/meminfo",
        example: "Parsing low-level memory parameters within custom analytical shell metrics collectors.",
        followUp: ["Is the data in /proc actually stored on disk?", "What information is housed inside /proc/cpuinfo?"]
    },
    {
        id: 100,
        tag: "Linux",
        question: "Q100. How to clear the current terminal screen display grid?",
        answer: "The 'clear' command flushes the active screen text layout buffer grid, resetting your command line view back to the top line.",
        command: "clear",
        example: "Clearing cluttered compilation log screens to make space before executing the next diagnostic commands.",
        followUp: ["What keyboard shortcut performs the exact same action as clear?", "Does clear erase terminal scrollback histories?"]
    }
];