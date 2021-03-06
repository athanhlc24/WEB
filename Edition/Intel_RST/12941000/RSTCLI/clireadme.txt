************************************************************
************************************************************
*
*  Command Line Utility Readme.
*
*  This document makes references to products developed by
*  Intel. There are some restrictions on how these products
*  may be used, and what information may be disclosed to
*  others. Please read the Disclaimer section at the bottom
*  of this document, and contact your Intel field
*  representative if you would like more information.
*
************************************************************
************************************************************

************************************************************
*  
*  Intel is making no claims of usability, efficacy or 
*  warranty. The INTEL SOFTWARE LICENSE AGREEMENT contained
*  herein completely defines the license and use of this
*  software.
*
************************************************************

************************************************************
*  CONTENTS OF THIS DOCUMENT
************************************************************

This document contains the following sections:

1.  OVERVIEW
2.  SYSTEM REQUIREMENTS
3.  ENTERING THE COMMAND LINE UTILITY USER INTERFACE
4.  COMMAND LINE UTILITY USAGE


************************************************************
* 1.  OVERVIEW
************************************************************

Intel(R) Rapid Storage Technology (Intel(R) RST) for CLI is 
a command line utility used to perform basic RAID operations
on RAID-enabled systems. Intel(R) RST for CLI supports RAID 0, 
RAID 1, RAID 5 and RAID 10 volumes. 
Intel(R) RST for CLI supports the following functionality: 
  - Creating RAID volumes including recovery volumes and arrays 
using the Create mode
  - Viewing properties of disks, volumes, arrays, and controllers 
using the Information mode
  - Managing RAID volumes, arrays, and disks using the Manage mode
  - Modifying existing volumes using the Modify mode
  - Accelerating a disk or volume with a specified SSD using 
the Accelerate mode


************************************************************
* 2.  SYSTEM REQUIREMENTS
************************************************************

Refer to Intel(R) Rapid Storage Technology product system
requirements.


************************************************************
* 3.  ENTERING THE COMMAND LINE UTILITY USER INTERFACE
************************************************************

Use the following steps to enter command line utility:
1.  Boot the system to Windows. 
2.  Open command prompt.
3.  Run rstcli.exe or rstcli64.exe with appropriate command 
line parameters.


************************************************************
* 4.  COMMAND LINE UTILITY USAGE
************************************************************

USAGE:

   Create Options:
   ---------------------------------
   | Flag | Name                   |
   ---------------------------------
   | -C   | --create               |
   | -E   | --create-from-existing |
   | -l   | --level                |
   | -n   | --name                 |
   | -s   | --stripe-size          |
   | -z   | --size                 |
   |      | --rrt                  |
   |      | --rrtMaster            |
   |      | --rrtUpdate            |
   ---------------------------------

   Create Usage:
   Creates a new volume and array or creates a new volume on an existing array.
    --create --level x [--size y] [--stripe-size z] --name string
    [--create-from-existing diskId] diskId {[diskId]}

   Create Examples:
    -C -l 1 -n Volume 0-1-0-0 0-2-0-0
    --create -l 0 -z 5 --name RAID0Volume 0-3-0-0 0-4-0-0 0-5-0-0
    -C -l 1 -E 0-1-0-0 -n VolumeWithData 0-2-0-0
    -C --rrt -n RRTVolume 0-1-0-0 0-2-0-0 --rrtMaster 0-1-0-0
    -C --rrt -n RRTVolume 0-1-0-0 0-2-0-0 --rrtUpdate Continuous
    --create --help


   Information Options:
   ------------------------
   | Flag | Name          |
   ------------------------
   | -I   | --information |
   | -a   | --array       |
   | -c   | --controller  |
   | -d   | --disk        |
   | -v   | --volume      |
   |      | --comma       |
   -----------------------

   Information Usage:
   Displays disk, volume, array, and controller information.
    --information --controller|--array|--disk|--volume
    {[device]}

   Information Examples:
    -I -v Volume
    -I -d 0-5-0-0
    -I --comma
    -I -v --comma
    -I -d 0-2-0-0 --comma
    --information --array Array_0000
    --information --help


   Manage Options:
   --------------------------------
   | Flag | Name                  |
   --------------------------------
   | -M   | --manage              |
   | -x   | --cancel-verify       |
   | -D   | --delete              |
   | -p   | --verify-repair       |
   | -f   | --normal-volume       |
   | -F   | --normal              |
   | -i   | --initialize          |
   | -L   | --locate              |
   | -T   | --delete-metadata     |
   | -N   | --not-spare           |
   | -P   | --volume-cache-policy |
   | -R   | --rebuild             |
   | -S   | --spare               |
   | -t   | --target              |
   | -U   | --verify              |
   | -w   | --write-cache         |
   --------------------------------

   Manage Usage:
    Manages arrays, volumes and disks present in the storage system.
    --manage --cancel-verify volumeName
    --manage --delete volumeName
    --manage --verify-repair volumeName
    --manage --normal-volume volumeName
    --manage --normal diskId
    --manage --initialize volumeName
    --manage --locate diskId
    --manage --delete-metadata diskId
    --manage --not-spare diskId
    --manage --volume-cache-policy off|wb --volume volumeName
    --manage --rebuild volumeName --target diskId
    --manage --spare diskId
    --manage --verify volumeName
    --manage --write-cache true|false --array arrayName

   Manage Examples:
    --manage --spare 0-3-0-0
    -M -D VolumeDelete
    -M --normal 0-2-0-0
    --manage -w true -array Array_0000
    -M -U VolumeVerify
    --manage --help


   Modify Options:
   -----------------------
   | Flag | Name         |
   -----------------------
   | -m   | --modify     |
   | -A   | --Add        |
   | -X   | --expand     |
   | -l   | --level      |
   | -n   | --name       |
   | -s   | --stripe-size|
   | -v   | --volume     |
   -----------------------

   Modify Usage:
    Modifies an existing volume or array.
    --modify --volume VolumeName --add diskId {[diskId]}
    --modify --volume VolumeName --expand
    --modify --volume VolumeName --level L [--add diskId {[diskId]}
    [--stripe-size s] [--name N]
    --modify --volume VolumeName --name n

   Modify Examples:
    -m -v Volume_0000 -A 0-3-0-0 0-4-0-0
    -m --volume ModifyVolume --level 5
    --modify -v Volume -n RenameVolume
    --modify --help


   Accelerate Options:
   -------------------------------
   | Flag | Name                 |
   -------------------------------
   |      | --createCache        |
   |      | --setAccelConfig     |
   |      | --disassociate       |
   |      | --reset-to-available |
   |      | --accel-info         |
   |      | --cache-size         |
   |      | --disk-to-accel      |
   |      | --volume-to-accel    |
   |      | --mode               |
   |      | --cache-volume       |
   |      | --loadCache          |
   |      | --stats              |    
   -------------------------------

   Accelerate Usage:
   Accelerates a given disk or volume with the specified SSD disk.
    --accelerate --createCache|--setAccelConfig|--disassociate|
                 --reset-to-available|--accel-info
    --accelerate --createCache --SSD <diskId> [--cache-size #]
    --accelerate --setAccelConfig --disk-to-accel <diskId> |
                 --volume-to-accel <volume name>  --mode enhanced | maximized | off
    --accelerate --disassociate --cache-volume <volume name>
    --accelerate --reset-to-available --cache-volume <volume name>
    --accelerate --accel-info
    --accelerate --loadCache <path\filename(s)> --recurse
    --accelerate --stats

   Accelerate Examples:
    --accelerate --createCache --SSD 0-3-0-0 --cache-size 30
    --accelerate --setAccelConfig --disk-to-accel 0-5-0-0 --mode enhanced
    --accelerate --setAccelConfig --volume-to-accel MyVolume --mode maximized
    --accelerate --disassociate --cache-volume Cache_Volume
    --accelerate --reset-to-available --cache-volume Cache_Volume
    --accelerate --accel-info
    --accelerate --loadCache "C:\*" --recurse
    --accelerate --loadCache "C:\Windows\*" --recurse -q
    --accelerate --stats
    --accelerate --help


OPTIONS:

   -A <<host>-<bus>-<target>-<lun>>,  --add <<host>-<bus>-<target>-<lun>>
     Adds new disks to an existing volume.

   -a,  --array
     Lists information about the arrays in the storage system.

   --accel-info
     Lists information about Accelerate settings.

   --accelerate
     Accelerates a given disk or volume with the specified SSD disk.

   -C,  --create
     Creates a new volume and array or creates a new volume on an existing
     array.

   -c,  --controller
     Lists information about the controllers in the storage system.

   --cache-size <MIN or MAX>
     Sets a size in gigabytes for the cache memory. This is an optional
     switch. If the size is not specified, the complete size of the SSD
     will be used for acceleration.

   --cache-volume <Volume name>
     Specifies a name for the volume used as cache.

   --createCache
     Creates the cache.

   -D <Volume name>,  --delete <Volume name>
     Deletes the specified volume.

   -d,  --disk
     Lists information about the disks in the storage system.

   --disassociate
     Disassociates the Cache volume from acceleration

   --disk-to-accel <<host>-<bus>-<target>-<lun>>
     Specifies a disk if accelerating a pass-through disk.

   --dynamic-storage-accelerator <true or false>
     Enable/Disable Dynamic Storage Accelerator.

   -E <<host>-<bus>-<target>-<lun>>,  --create-from-existing
      <<host>-<bus>-<target>-<lun>>
     Identifies the disk if data is to be migrated from one of the disks.
     Disk identifier is SCSI address.

   -F <<host>-<bus>-<target>-<lun>>,  --normal
      <<host>-<bus>-<target>-<lun>>
     Resets failed or SMART event disk to normal.

   -f <Volume name>,  --normal-volume <Volume name>
     Resets failed RAID 0 volume to normal and recovers data.

   -h,  --help
     Displays help documentation for command line utility modes, options,
     usage, examples, and return codes. When used with a mode switch
     (create, information, mange, modify, or accelerate), instructions for
     that mode display. For example, --create --help displays Create option
     help.

   -I,  --information
     Displays disk, volume, array, and controller information.

   -i <Volume name>,  --initialize <Volume name>
     Initializes the redundant data on a RAID 1, 5 or 10 volume.

   -L <<host>-<bus>-<target>-<lun>>,  --locate
      <<host>-<bus>-<target>-<lun>>
     Locates device and blinks the LED.

   -l <0, 1, 5, 10>,  --level <0, 1, 5, 10>
     Changes the Raid type of an existing volume. Options are migrations
     from RAID 1 to RAID 0 or 5, RAID 0 to RAID 5, and RAID 10 to RAID 5.

   -loadCache <path\filename>
     Loads content into the NV cache.  Does support wildcards "*".

   -M,  --manage
     Manages arrays, volumes and disks present in the storage system.

   -m,  --modify
     Modifies an existing volume or array.

   --mode <Enhanced or Maximized mode>
     Specifies Accelerate mode as Enhanced or Maximized.

   -N <<host>-<bus>-<target>-<lun>>,  --not-spare
      <<host>-<bus>-<target>-<lun>>
     Resets a spare disk to available.

   -n <Volume name>,  --name <Volume name>
     Specifies a name for the volume created. Renames an existing volume in
     Modify mode.

   -P <Volume name>,  --volume-cache-policy <Volume name>
     Sets volume cache policy to either off or wb.

   -p <Volume name>,  --verify-repair <Volume name>
     Verifies and repairs the volume.

   -q,  --quiet
     Suppresses output for create, modify, and manage modes.  Not valid on
     info mode.

   -R <Volume name>,  --rebuild <Volume name>
     Rebuilds the degraded volume.

   -r,  --rescan
     Forces the system to rescan for hardware changes.

   --recurse
     To directory recurse When loading content into the NV cache.

   --reset-to-available
     Resets the cache volume to available.

   --rrt
     Creates a recovery volume using Intel(R) Rapid Recovery Technology
     (RRT).

   --rrtMaster <<host>-<bus>-<target>-<lun>>
     Optionally creates a recovery volume that allows you to select a
     specific disk as the master disk. Default is the first disk in the
     disk list.

   --rrtUpdate <Continuous or OnRequest Update>
     Specifies a data update setting when creating a recovery volume as
     Continuous or OnRequest. Default is Continuous.

   -S <<host>-<bus>-<target>-<lun>>,  --spare <<host>-<bus>-<target>-<lun>>
     Marks a disk as a spare.

   --SSD <<host>-<bus>-<target>-<lun>>
     Specifies SSD disk that will be used as cache. If another SSD is being
     used as cache, then that volume needs to be deleted to use a new SSD
     disk.

   -s <size in KB>,  --stripe-size <size in KB>
     Sets a stripe size in kilobytes (2^10 bytes) for a volume. Valid when
     creating or changing the type of a volume and for RAID 0, RAID 5 and
     RAID 10. Options are 4, 8, 16, 32, 64 and 128 KB.

   --setAccelConfig
     Sets the config for accelerating a volume or disk.

   --stats
     Provides statistical information about the NV cache.

   -T <<host>-<bus>-<target>-<lun>>,  --delete-metadata
      <<host>-<bus>-<target>-<lun>>
     Deletes the metadata from the specified disk.

   -t <<host>-<bus>-<target>-<lun>>,  --target
      <<host>-<bus>-<target>-<lun>>
     Indicates the pass-through disk to be used for rebuilding a degraded
     volume.

   -U <Volume name>,  --verify <Volume name>
     Verifies data on the volume.

   -u <password>,  --unlock <password>
     Unlocks a disk.

   -V,  --version
     Displays version information.

   -v,  --volume
     Lists information about the volumes on the system.  Stipulates the
     volume to act on when used in Modify or Manage mode.

   --volume-to-accel <Volume name>
     Specifies a name of the volume to be accelerated.

   -w <true or false>,  --write-cache <true or false>
     Enables or disables write cache for all disks that are part of an
     array.

   -X,  --expand
     Expands a volume to consume all available space in an array.

   -x <Volume name>,  --cancel-verify <Volume name>
     Cancels a verify operation in progress.

   -z <size in GB>,  --size <size in GB>
     Sets a size in gigabytes.  This is an optional switch. If the size is
     not specified or specified to 0, then the maximum size available will
     be used.

************************************************************
* MIT Copyright and Disclaimer
************************************************************

Copyright (c) 2003 Michael E. Smoot 

Permission is hereby granted, free of charge, to any person 
obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, 
publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be 
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN 
AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR 
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

************************************************************
* DISCLAIMER
************************************************************

INFORMATION IN THIS DOCUMENT IS PROVIDED IN CONNECTION WITH INTEL PRODUCTS.
NO LICENSE, EXPRESS OR IMPLIED, BY ESTOPPEL OR OTHERWISE, TO ANY
INTELLECTUAL PROPERTY RIGHTS IS GRANTED BY THIS DOCUMENT. EXCEPT AS
PROVIDED IN INTEL'S TERMS AND CONDITIONS OF SALE FOR SUCH PRODUCTS, INTEL
ASSUMES NO LIABILITY WHATSOEVER AND INTEL DISCLAIMS ANY EXPRESS OR IMPLIED
WARRANTY, RELATING TO SALE AND/OR USE OF INTEL PRODUCTS INCLUDING LIABILITY
OR WARRANTIES RELATING TO FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABILITY, OR INFRINGEMENT OF ANY PATENT, COPYRIGHT OR OTHER
INTELLECTUAL PROPERTY RIGHT.

UNLESS OTHERWISE AGREED IN WRITING BY INTEL, THE INTEL PRODUCTS ARE NOT 
DESIGNED NOR INTENDED FOR ANY APPLICATION IN WHICH THE FAILURE OF THE INTEL
PRODUCT COULD CREATE A SITUATION WHERE PERSONAL INJURY OR DEATH MAY OCCUR.

Intel may make changes to specifications and product descriptions at any
time, without notice. Designers must not rely on the absence or 
characteristics of any features or instructions marked "reserved" or "undefined". 
Intel reserves these for future definition and shall have no
responsibility whatsoever for conflicts or incompatibilities arising from 
future changes to them. The information here is subject to change without 
notice. Do not finalize a design with this information.

The products described in this document may contain design defects or
errors known as errata which may cause the product to deviate from 
published specifications. Current characterized errata are available on 
request.

Contact your local Intel sales office or your distributor to obtain the 
latest specifications and before placing your product order.

Copies of documents which have an order number and are referenced in this
document, or other Intel literature, may be obtained by calling 
1-800-548-4725, or go to: http://www.intel.com/#/en_us_01

Intel(R) is a trademark of Intel Corporation in the U.S. and other 
countries.

* Other names and brands may be claimed as the property of others
        
Copyright (c) Intel Corporation, 2011-2012
************************************************************
* INTEL SOFTWARE LICENSE AGREEMENT
************************************************************