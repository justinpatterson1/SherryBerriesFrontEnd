## Domain Name System

At the end of this episode, I will be able to:

1. Explain the purpose of DNS. Identify key components of the DNS infrastructure.


Exam Objective: *2.5 - Compare and contrast common network configuration concepts.*

Description: In this episode, we look at one of the most widely used networking service Domain Name System \(DNS\). We will discuss the fully-qualified domain names commonly called FQDNs, the name resolution process, and the records used within a DNS database.

-----------------------------------------------------------

* **Name Resolution**
	+ Mapping fully-qualified domain names or FQDNs to IP addresses
* **FQDNs** \(Fully-qualified domain name\)
    + Follow the DNS hierarchal naming convention
    + Comprised of a domain name \(Example:domain.com\)
    + Host name \(computer owned by the domain owner)
* **Name Resolution Process**
	+ Hosts file
	+ Local Resolver Cache
	+ DNS Servers \(Root first, TLD, SLD\)
		- Locally configured DNS server \(Private or ISP DNS server\)
		- Root hint
		- Top-level Domain \(TLD\)
		- Second-level domain or host's domain \(SLD, typically organizations\)
* **DNS Database and Records**
 	+ Address \(A\) or Hostname-to-IPv4address
 	+ Quad A \(AAAA\) or Hostname-to-IPv6address
 	+ Pointer Records \(PTR\) or IPv4-to-HostName
	+ Mail exchanger \(MX\)
	+ Canonical \(CNAME\) or Alias-to-Address-Record
 	+ Text \(TXT\)
		- Spam management
			* DomainKeys Identified Mail \(DKIM\)
				- Public-key cryptology to secure DNS records
				- Domain owner is verified
			* Sender Policy Framework \(SPF\)
				-  It contains a list of all the IP addresses that are authorized to send email on behalf of the domain owner.
			* Domain-based Message Authentication, Reporting, and Conformance \(DMARC\)
				- Requires either an SPF for DKIM record
				- Reports the status of the SPF or DKIM record
------------------------------------------------------------

* Additional Reference Materials

