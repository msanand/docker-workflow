# -*- mode: ruby -*-
# vi: set ft=ruby :

unless Vagrant.has_plugin?("vagrant-docker-compose")
  system("vagrant plugin install vagrant-docker-compose")
  puts "Dependencies installed, please try the command again."
  exit
end

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  #config.vm.box = "box-cutter/centos70-docker"

  config.vm.network(:forwarded_port, guest: 80, host: 9080)

  config.vm.provision :shell, inline: "apt-get update"
  #config.vm.provision :shell, inline: "yum clean all; yum makecache fast; yum -y update"
  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: "/vagrant/docker-compose.yml", rebuild: true, project_name: "myproject", run: "always"
end
